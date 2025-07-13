'use client';

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  // Eye
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('room_rate_submissions')
        .select(`
          id,
          status,
          admin_notes,
          created_at,
          reviewed_at,
          reviewed_by,
          submitter_name,
          submitter_relationship,
          submitter_email,
          hospital_id,
          room_entries,
          hospitals (
            name,
            city,
            regions (
              name
            )
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
      console.log('Submissions loaded:', data);
    } catch (err) {
      console.error('Error loading submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateSubmissionStatus = async (id, status, adminNotes = '') => {
    try {
      const { error } = await supabase
        .from('room_rate_submissions')
        .update({
          status,
          admin_notes: adminNotes,
          reviewed_at: new Date().toISOString(),
          reviewed_by: 'Admin' // In real app, get from auth
        })
        .eq('id', id);

      if (error) throw error;
      loadSubmissions(); // Refresh list
    } catch (err) {
      console.error('Error updating submission:', err);
    }
  };

  const approveAndAddToDatabase = async (submission) => {
    try {
      // Add rooms to the main database
      for (const roomEntry of submission.room_entries) {
        // First, get or create room type
        const { data: roomType, error: roomTypeError } = await supabase
          .from('room_types')
          .select('id')
          .eq('name', roomEntry.room_type)
          .single();

        if (roomTypeError && roomTypeError.code !== 'PGRST116') {
          throw roomTypeError;
        }

        let roomTypeId = roomType?.id;

        // Create room type if it doesn't exist
        if (!roomTypeId) {
          const { data: newRoomType, error: createError } = await supabase
            .from('room_types')
            .insert({ name: roomEntry.room_type })
            .select('id')
            .single();

          if (createError) throw createError;
          roomTypeId = newRoomType.id;
        }

        // Add room to database
        const { error: roomError } = await supabase
          .from('rooms')
          .insert({
            hospital_id: submission.hospital_id,
            room_type_id: roomTypeId,
            name: roomEntry.room_name,
            price: roomEntry.price,
            capacity: roomEntry.capacity,
            amenities: JSON.stringify(roomEntry.amenities),
            description: roomEntry.description,
            is_available: true
          });

        if (roomError) throw roomError;
      }

      // Update submission status
      await updateSubmissionStatus(submission.id, 'approved', 'Added to database');
      
    } catch (err) {
      console.error('Error approving submission:', err);
      await updateSubmissionStatus(submission.id, 'rejected', 'Error adding to database');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Room Rate Submissions</h1>

      <div className="grid grid-cols-1 gap-6">
        {submissions.map((submission) => (
          <div key={submission.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {submission.hospitals?.name}
                </h3>
                <p className="text-gray-600">
                  {submission.hospitals?.city}, {submission.hospitals?.regions?.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Submitted by: {submission.submitter_name} ({submission.submitter_relationship})
                </p>
                <p className="text-sm text-gray-500">
                  Email: {submission.submitter_email}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(submission.status)}
                <span className="capitalize text-sm font-medium">
                  {submission.status}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Room Entries:</h4>
              <div className="space-y-2">
                {submission.room_entries.map((room, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">{room.room_type}</div>
                        {room.room_name && (
                          <div className="text-sm text-gray-600">{room.room_name}</div>
                        )}
                        <div className="text-sm text-gray-600">
                          Capacity: {room.capacity} | Rating: {room.rating}/5
                        </div>
                        {room.amenities && room.amenities.length > 0 && (
                          <div className="text-sm text-gray-600">
                            Amenities: {room.amenities.join(', ')}
                          </div>
                        )}
                        {room.description && (
                          <div className="text-sm text-gray-600 mt-1">
                            "{room.description}"
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-blue-600">
                          {formatPrice(room.price)}
                        </div>
                        <div className="text-sm text-gray-500">per night</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {submission.status === 'pending' && (
              <div className="flex gap-3">
                <button
                  onClick={() => approveAndAddToDatabase(submission)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Approve & Add to Database
                </button>
                <button
                  onClick={() => updateSubmissionStatus(submission.id, 'rejected', 'Does not meet quality standards')}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Reject
                </button>
              </div>
            )}

            {submission.admin_notes && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="text-sm font-medium text-yellow-800">Admin Notes:</div>
                <div className="text-sm text-yellow-700">{submission.admin_notes}</div>
              </div>
            )}

            <div className="mt-4 text-xs text-gray-500">
              Submitted: {new Date(submission.created_at).toLocaleString()}
              {submission.reviewed_at && (
                <span className="ml-4">
                  Reviewed: {new Date(submission.reviewed_at).toLocaleString()}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {submissions.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">No submissions found.</div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
