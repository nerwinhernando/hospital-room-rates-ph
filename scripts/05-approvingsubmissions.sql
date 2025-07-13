-- Fix RLS Policy for Rooms Table
-- Run this in Supabase SQL Editor

-- Check current policies on rooms table
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'rooms';

-- Add policy to allow inserting new rooms (for admin approval process)
CREATE POLICY "Allow insert for room submissions" ON rooms
    FOR INSERT WITH CHECK (true);

-- Add policy to allow updating rooms (for admin edits)
CREATE POLICY "Allow update for room modifications" ON rooms
    FOR UPDATE USING (true);

-- If you want to be more restrictive, you can create policies that only allow
-- inserts/updates for specific conditions, but for now this allows the admin
-- approval process to work

-- Alternative: If you want to disable RLS entirely on rooms table
-- (only do this if you're comfortable with public access)
-- ALTER TABLE rooms DISABLE ROW LEVEL SECURITY;

-- Check that policies were created successfully
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'rooms';