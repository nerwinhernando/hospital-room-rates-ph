-- ===========================================
-- SUPABASE SQL SCHEMA FOR HOSPITAL SEARCH
-- ===========================================

-- 1. Create regions table
CREATE TABLE regions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(20),
    provinces TEXT[], -- Array of province names
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create hospitals table
CREATE TABLE hospitals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    region_id INTEGER REFERENCES regions(id) ON DELETE CASCADE,
    city VARCHAR(100) NOT NULL,
    province VARCHAR(100),
    address TEXT NOT NULL,
    phone VARCHAR(50),
    email VARCHAR(100),
    website VARCHAR(200),
    rating DECIMAL(2,1) CHECK (rating >= 0 AND rating <= 5),
    description TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create room_types table
CREATE TABLE room_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Create rooms table
CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    hospital_id INTEGER REFERENCES hospitals(id) ON DELETE CASCADE,
    room_type_id INTEGER REFERENCES room_types(id) ON DELETE CASCADE,
    name VARCHAR(200),
    price DECIMAL(10, 2) NOT NULL,
    capacity INTEGER DEFAULT 1,
    amenities JSONB, -- Store amenities as JSON array
    description TEXT,
    image_urls TEXT[], -- Array of image URLs
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Create amenities table (for standardized amenities)
CREATE TABLE amenities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    icon VARCHAR(50), -- Icon name for UI
    category VARCHAR(50), -- e.g., 'comfort', 'medical', 'technology'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Create room_amenities junction table
CREATE TABLE room_amenities (
    room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE,
    amenity_id INTEGER REFERENCES amenities(id) ON DELETE CASCADE,
    PRIMARY KEY (room_id, amenity_id)
);

-- 7. Create reviews table (optional for future use)
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    hospital_id INTEGER REFERENCES hospitals(id) ON DELETE CASCADE,
    user_name VARCHAR(100),
    user_email VARCHAR(100),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(200),
    comment TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===========================================
-- INDEXES FOR BETTER PERFORMANCE
-- ===========================================

-- Index for hospital searches
CREATE INDEX idx_hospitals_name ON hospitals USING gin(to_tsvector('english', name));
CREATE INDEX idx_hospitals_city ON hospitals(city);
CREATE INDEX idx_hospitals_region ON hospitals(region_id);
CREATE INDEX idx_hospitals_rating ON hospitals(rating DESC);
CREATE INDEX idx_hospitals_active ON hospitals(is_active);

-- Index for room searches
CREATE INDEX idx_rooms_hospital ON rooms(hospital_id);
CREATE INDEX idx_rooms_type ON rooms(room_type_id);
CREATE INDEX idx_rooms_price ON rooms(price);
CREATE INDEX idx_rooms_available ON rooms(is_available);

-- Geographic index for location-based searches
CREATE INDEX idx_hospitals_location ON hospitals USING gist(point(longitude, latitude));

-- ===========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ===========================================

-- Enable RLS on all tables
ALTER TABLE regions ENABLE ROW LEVEL SECURITY;
ALTER TABLE hospitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE room_amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Allow public read access to regions
CREATE POLICY "Allow public read access on regions" ON regions
    FOR SELECT USING (true);

-- Allow public read access to active hospitals
CREATE POLICY "Allow public read access on hospitals" ON hospitals
    FOR SELECT USING (is_active = true);

-- Allow public read access to room_types
CREATE POLICY "Allow public read access on room_types" ON room_types
    FOR SELECT USING (true);

-- Allow public read access to available rooms
CREATE POLICY "Allow public read access on rooms" ON rooms
    FOR SELECT USING (is_available = true);

-- Allow public read access to amenities
CREATE POLICY "Allow public read access on amenities" ON amenities
    FOR SELECT USING (true);

-- Allow public read access to room_amenities
CREATE POLICY "Allow public read access on room_amenities" ON room_amenities
    FOR SELECT USING (true);

-- Allow public read access to verified reviews
CREATE POLICY "Allow public read access on reviews" ON reviews
    FOR SELECT USING (is_verified = true);

-- ===========================================
-- INSERT SAMPLE DATA
-- ===========================================

-- Insert Philippine regions
INSERT INTO regions (name, code, provinces) VALUES
('National Capital Region', 'NCR', ARRAY['Manila', 'Quezon City', 'Makati', 'Pasig', 'Taguig', 'Muntinlupa', 'Parañaque', 'Las Piñas', 'Pasay', 'Valenzuela', 'Caloocan', 'Malabon', 'Navotas', 'Mandaluyong', 'San Juan', 'Marikina', 'Pateros']),
('Cordillera Administrative Region', 'CAR', ARRAY['Abra', 'Apayao', 'Benguet', 'Ifugao', 'Kalinga', 'Mountain Province']),
('Ilocos Region', 'Region I', ARRAY['Ilocos Norte', 'Ilocos Sur', 'La Union', 'Pangasinan']),
('Cagayan Valley', 'Region II', ARRAY['Batanes', 'Cagayan', 'Isabela', 'Nueva Vizcaya', 'Quirino']),
('Central Luzon', 'Region III', ARRAY['Aurora', 'Bataan', 'Bulacan', 'Nueva Ecija', 'Pampanga', 'Tarlac', 'Zambales']),
('CALABARZON', 'Region IV-A', ARRAY['Batangas', 'Cavite', 'Laguna', 'Quezon', 'Rizal']),
('MIMAROPA', 'Region IV-B', ARRAY['Marinduque', 'Occidental Mindoro', 'Oriental Mindoro', 'Palawan', 'Romblon']),
('Bicol Region', 'Region V', ARRAY['Albay', 'Camarines Norte', 'Camarines Sur', 'Catanduanes', 'Masbate', 'Sorsogon']),
('Western Visayas', 'Region VI', ARRAY['Aklan', 'Antique', 'Capiz', 'Guimaras', 'Iloilo', 'Negros Occidental']),
('Central Visayas', 'Region VII', ARRAY['Bohol', 'Cebu', 'Negros Oriental', 'Siquijor']),
('Eastern Visayas', 'Region VIII', ARRAY['Biliran', 'Eastern Samar', 'Leyte', 'Northern Samar', 'Samar', 'Southern Leyte']),
('Zamboanga Peninsula', 'Region IX', ARRAY['Zamboanga del Norte', 'Zamboanga del Sur', 'Zamboanga Sibugay']),
('Northern Mindanao', 'Region X', ARRAY['Bukidnon', 'Camiguin', 'Lanao del Norte', 'Misamis Occidental', 'Misamis Oriental']),
('Davao Region', 'Region XI', ARRAY['Davao de Oro', 'Davao del Norte', 'Davao del Sur', 'Davao Occidental', 'Davao Oriental']),
('SOCCSKSARGEN', 'Region XII', ARRAY['Cotabato', 'Sarangani', 'South Cotabato', 'Sultan Kudarat']),
('Caraga', 'Region XIII', ARRAY['Agusan del Norte', 'Agusan del Sur', 'Dinagat Islands', 'Surigao del Norte', 'Surigao del Sur']),
('Bangsamoro Autonomous Region in Muslim Mindanao', 'BARMM', ARRAY['Basilan', 'Lanao del Sur', 'Maguindanao del Norte', 'Maguindanao del Sur', 'Sulu', 'Tawi-Tawi']);

-- Insert room types
INSERT INTO room_types (name, description) VALUES
('Standard Room', 'Basic room with essential amenities'),
('Deluxe Room', 'Enhanced room with additional comfort features'),
('Suite', 'Spacious room with separate living area'),
('ICU', 'Intensive Care Unit with specialized medical equipment'),
('Emergency Room', 'Immediate care facility'),
('Operating Room', 'Surgical procedure room'),
('Private Ward', 'Private room for extended stay'),
('Semi-Private Ward', 'Shared room with 2-4 beds');

-- Insert amenities
INSERT INTO amenities (name, icon, category) VALUES
('Air Conditioning', 'snowflake', 'comfort'),
('Television', 'tv', 'entertainment'),
('Private Bathroom', 'bath', 'comfort'),
('Shared Bathroom', 'users', 'comfort'),
('Wi-Fi', 'wifi', 'technology'),
('Telephone', 'phone', 'technology'),
('Refrigerator', 'refrigerator', 'comfort'),
('Sofa', 'armchair', 'comfort'),
('Balcony', 'door-open', 'comfort'),
('Kitchen/Kitchenette', 'chef-hat', 'comfort'),
('Living Area', 'home', 'comfort'),
('24/7 Monitoring', 'eye', 'medical'),
('Ventilator Ready', 'wind', 'medical'),
('Specialized Equipment', 'stethoscope', 'medical'),
('Nurse Call Button', 'bell', 'medical'),
('Oxygen Supply', 'circle', 'medical'),
('Cardiac Monitor', 'heart-pulse', 'medical'),
('Wheelchair Accessible', 'wheelchair', 'accessibility');

-- Insert sample hospitals
INSERT INTO hospitals (name, region_id, city, province, address, phone, email, website, rating, description, latitude, longitude) VALUES
('Makati Medical Center', 1, 'Makati City', 'Metro Manila', '2 Amorsolo Street, Legaspi Village, Makati City', '(02) 8888-8999', 'info@makatimed.net.ph', 'https://www.makatimed.net.ph', 4.5, 'Premier medical institution in the heart of Makati', 14.5547, 121.0244),
('St. Luke''s Medical Center - Quezon City', 1, 'Quezon City', 'Metro Manila', '279 E. Rodriguez Sr. Avenue, Quezon City', '(02) 8723-0101', 'info@stluke.com.ph', 'https://www.stluke.com.ph', 4.7, 'Leading medical center with world-class facilities', 14.6042, 121.0193),
('Philippine General Hospital', 1, 'Manila', 'Metro Manila', 'Taft Avenue, Ermita, Manila', '(02) 8554-8400', 'info@pgh.gov.ph', 'https://www.pgh.gov.ph', 4.2, 'National university hospital providing quality healthcare', 14.5794, 120.9898),
('Cebu Doctors'' University Hospital', 10, 'Cebu City', 'Cebu', 'Larrazabal Avenue, Cebu City', '(032) 255-5555', 'info@cduh.com.ph', 'https://www.cduh.com.ph', 4.3, 'Leading medical institution in the Visayas region', 10.3157, 123.8854),
('Davao Medical School Foundation Hospital', 12, 'Davao City', 'Davao del Sur', 'Bajada, Davao City', '(082) 227-2731', 'info@dmsf.edu.ph', 'https://www.dmsf.edu.ph', 4.2, 'Premier medical institution in Mindanao', 7.0731, 125.6128),
('Northern Mindanao Medical Center', 11, 'Cagayan de Oro City', 'Misamis Oriental', 'J.R. Borja Street, Cagayan de Oro City', '(088) 857-3333', 'info@nmmc.gov.ph', 'https://www.nmmc.gov.ph', 4.0, 'Regional medical center serving Northern Mindanao', 8.4542, 124.6319),
('Baguio General Hospital', 2, 'Baguio City', 'Benguet', 'Governor Pack Road, Baguio City', '(074) 442-4216', 'info@bgh.gov.ph', 'https://www.bgh.gov.ph', 4.1, 'Premier medical facility in the Cordilleras', 16.4023, 120.5960);

-- Insert sample rooms for each hospital
-- Makati Medical Center (hospital_id = 1)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(1, 1, 'Standard Room', 8000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Nurse Call Button"]', 'Comfortable standard room with basic amenities'),
(1, 2, 'Deluxe Room', 12000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Refrigerator", "Wi-Fi"]', 'Enhanced room with additional comfort features'),
(1, 3, 'Executive Suite', 25000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Kitchen/Kitchenette", "Balcony"]', 'Spacious suite with separate living area'),
(1, 4, 'ICU', 15000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment", "Cardiac Monitor"]', 'Intensive care unit with specialized medical equipment');

-- St. Luke's Medical Center (hospital_id = 2)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(2, 1, 'Standard Room', 9000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi"]', 'Well-appointed standard room'),
(2, 2, 'Deluxe Room', 14000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Refrigerator", "Wi-Fi"]', 'Premium deluxe accommodation'),
(2, 3, 'Presidential Suite', 30000.00, 4, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Kitchen/Kitchenette", "Balcony"]', 'Luxury suite with premium amenities'),
(2, 4, 'ICU', 18000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment", "Cardiac Monitor"]', 'State-of-the-art intensive care unit');

-- Philippine General Hospital (hospital_id = 3)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(3, 1, 'Standard Ward', 3000.00, 1, '["Air Conditioning", "Shared Bathroom", "Nurse Call Button"]', 'Basic ward accommodation'),
(3, 7, 'Private Room', 6000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi"]', 'Private room with essential amenities'),
(3, 8, 'Semi-Private Ward', 4500.00, 2, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Shared accommodation for 2 patients'),
(3, 4, 'ICU', 8000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Intensive care facility');

-- Cebu Doctors' University Hospital (hospital_id = 4)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(4, 1, 'Standard Room', 6000.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Comfortable standard accommodation'),
(4, 2, 'Deluxe Room', 9000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Wi-Fi"]', 'Enhanced room with modern amenities'),
(4, 3, 'Suite', 18000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Refrigerator"]', 'Spacious suite accommodation'),
(4, 4, 'ICU', 12000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Cardiac Monitor"]', 'Comprehensive intensive care unit');

-- Davao Medical School Foundation Hospital (hospital_id = 5)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(5, 1, 'Standard Room', 5500.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Standard room with basic comforts'),
(5, 2, 'Deluxe Room', 8000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Wi-Fi"]', 'Upgraded room with additional amenities'),
(5, 3, 'VIP Suite', 15000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Refrigerator"]', 'VIP accommodation with premium features'),
(5, 4, 'ICU', 10000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Advanced intensive care facility');

-- Northern Mindanao Medical Center (hospital_id = 6)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(6, 1, 'Standard Room', 4500.00, 1, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Affordable standard accommodation'),
(6, 2, 'Deluxe Room', 7000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa"]', 'Comfortable deluxe room'),
(6, 3, 'Suite', 12000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area"]', 'Spacious suite for extended stays'),
(6, 4, 'ICU', 8000.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Intensive care with modern equipment');

-- Baguio General Hospital (hospital_id = 7)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(7, 1, 'Standard Room', 5000.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Standard room in the cool mountain air'),
(7, 2, 'Deluxe Room', 7500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa"]', 'Enhanced comfort in Baguio'),
(7, 3, 'Mountain View Suite', 14000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Balcony"]', 'Suite with scenic mountain views'),
(7, 4, 'ICU', 9000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Comprehensive critical care unit');

-- ===========================================
-- USEFUL FUNCTIONS
-- ===========================================

-- Function to search hospitals by name or city
CREATE OR REPLACE FUNCTION search_hospitals(search_term TEXT)
RETURNS TABLE (
    id INTEGER,
    name VARCHAR(200),
    city VARCHAR(100),
    region_name VARCHAR(100),
    rating DECIMAL(2,1)
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        h.id,
        h.name,
        h.city,
        r.name as region_name,
        h.rating
    FROM hospitals h
    JOIN regions r ON h.region_id = r.id
    WHERE h.is_active = true
    AND (
        h.name ILIKE '%' || search_term || '%' OR
        h.city ILIKE '%' || search_term || '%'
    )
    ORDER BY h.rating DESC;
END;
$$ LANGUAGE plpgsql;

-- Function to get rooms with price filter
CREATE OR REPLACE FUNCTION get_rooms_by_price_range(
    min_price DECIMAL,
    max_price DECIMAL,
    room_type_name TEXT DEFAULT NULL
)
RETURNS TABLE (
    hospital_name VARCHAR(200),
    room_name VARCHAR(200),
    room_type VARCHAR(100),
    price DECIMAL(10,2),
    amenities JSONB
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        h.name as hospital_name,
        r.name as room_name,
        rt.name as room_type,
        r.price,
        r.amenities
    FROM rooms r
    JOIN hospitals h ON r.hospital_id = h.id
    JOIN room_types rt ON r.room_type_id = rt.id
    WHERE r.is_available = true
    AND h.is_active = true
    AND r.price BETWEEN min_price AND max_price
    AND (room_type_name IS NULL OR rt.name = room_type_name)
    ORDER BY r.price ASC;
END;
$$ LANGUAGE plpgsql;

-- ===========================================
-- TRIGGERS FOR AUTO-UPDATING TIMESTAMPS
-- ===========================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for all tables with updated_at
CREATE TRIGGER update_regions_updated_at BEFORE UPDATE ON regions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_hospitals_updated_at BEFORE UPDATE ON hospitals
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_rooms_updated_at BEFORE UPDATE ON rooms
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();