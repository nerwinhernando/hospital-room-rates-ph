-- Add new columns to rooms table
ALTER TABLE rooms ADD COLUMN IF NOT EXISTS data_source VARCHAR(20) DEFAULT 'dummy';
ALTER TABLE rooms ADD COLUMN IF NOT EXISTS contributor_name VARCHAR(200);
ALTER TABLE rooms ADD COLUMN IF NOT EXISTS contributor_email VARCHAR(200);
ALTER TABLE rooms ADD COLUMN IF NOT EXISTS submission_id INTEGER REFERENCES room_rate_submissions(id);
ALTER TABLE rooms ADD COLUMN IF NOT EXISTS last_verified_at TIMESTAMP WITH TIME ZONE;
ALTER TABLE rooms ADD COLUMN IF NOT EXISTS verification_notes TEXT;

-- Update existing rooms to mark as dummy data
UPDATE rooms SET 
    data_source = 'dummy',
    last_verified_at = NOW()
WHERE data_source IS NULL;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_rooms_data_source ON rooms(data_source);
CREATE INDEX IF NOT EXISTS idx_rooms_contributor ON rooms(contributor_name);
CREATE INDEX IF NOT EXISTS idx_rooms_submission ON rooms(submission_id);
