-- Check existing policies
SELECT * FROM pg_policies WHERE tablename = 'room_rate_submissions';

-- Add UPDATE policy if missing
CREATE POLICY "Allow update for submission status" ON room_rate_submissions
    FOR UPDATE USING (true);
