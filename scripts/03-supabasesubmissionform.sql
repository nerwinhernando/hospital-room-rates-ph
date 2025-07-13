-- Create room_rate_submissions table
CREATE TABLE room_rate_submissions (
    id SERIAL PRIMARY KEY,
    hospital_id INTEGER REFERENCES hospitals(id) ON DELETE CASCADE,
    submitter_name VARCHAR(200) NOT NULL,
    submitter_email VARCHAR(200) NOT NULL,
    submitter_phone VARCHAR(50),
    submitter_relationship VARCHAR(50) NOT NULL,
    room_entries JSONB NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
    admin_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    reviewed_by VARCHAR(200)
);

-- Create indexes for better performance
CREATE INDEX idx_submissions_hospital ON room_rate_submissions(hospital_id);
CREATE INDEX idx_submissions_status ON room_rate_submissions(status);
CREATE INDEX idx_submissions_created ON room_rate_submissions(created_at);
CREATE INDEX idx_submissions_email ON room_rate_submissions(submitter_email);

-- Enable RLS
ALTER TABLE room_rate_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert submissions
CREATE POLICY "Allow public to submit room rates" ON room_rate_submissions
    FOR INSERT WITH CHECK (true);

-- Allow public to view their own submissions
CREATE POLICY "Allow users to view own submissions" ON room_rate_submissions
    FOR SELECT USING (submitter_email = current_setting('request.jwt.claims', true)::json->>'email');

-- Create trigger for updating timestamp
CREATE TRIGGER update_submissions_updated_at BEFORE UPDATE ON room_rate_submissions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();