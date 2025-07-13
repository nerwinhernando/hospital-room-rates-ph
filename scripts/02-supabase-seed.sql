-- ===========================================
-- EXPANDED PHILIPPINES HOSPITAL DATABASE
-- Additional 40+ Hospitals Across All Regions
-- ===========================================

-- Insert additional major hospitals across the Philippines
INSERT INTO hospitals (name, region_id, city, province, address, phone, email, website, rating, description, latitude, longitude) VALUES

-- NATIONAL CAPITAL REGION (NCR) - Additional Hospitals
('The Medical City', 1, 'Pasig City', 'Metro Manila', 'Ortigas Avenue, Pasig City', '(02) 8635-6789', 'info@themedicalcity.com', 'https://www.themedicalcity.com', 4.6, 'Leading tertiary hospital with comprehensive medical services', 14.5764, 121.0851),
('Cardinal Santos Medical Center', 1, 'San Juan City', 'Metro Manila', '10 Wilson Street, Greenhills, San Juan City', '(02) 8727-0001', 'info@csmc.com.ph', 'https://www.csmc.com.ph', 4.4, 'Premier medical institution in the heart of Metro Manila', 14.5995, 121.0346),
('Asian Hospital and Medical Center', 1, 'Muntinlupa City', 'Metro Manila', '2205 Civic Drive, Filinvest Corporate City, Alabang', '(02) 8771-9000', 'inquiry@asianhospital.com', 'https://www.asianhospital.com', 4.5, 'World-class healthcare facility in Alabang', 14.4198, 121.0509),
('Veterans Memorial Medical Center', 1, 'Quezon City', 'Metro Manila', 'North Avenue, Diliman, Quezon City', '(02) 8927-0001', 'info@vmmc.gov.ph', 'https://www.vmmc.gov.ph', 4.1, 'Government tertiary hospital serving veterans and civilians', 14.6507, 121.0320),
('Manila Doctors Hospital', 1, 'Manila', 'Metro Manila', '667 United Nations Avenue, Ermita, Manila', '(02) 8524-3011', 'info@maniladoctors.com.ph', 'https://www.maniladoctors.com.ph', 4.3, 'Historic medical institution in Manila', 14.5774, 120.9823),
('Chinese General Hospital', 1, 'Manila', 'Metro Manila', '286 Blumentritt Road, Santa Cruz, Manila', '(02) 8711-4141', 'info@cgh.com.ph', 'https://www.cgh.com.ph', 4.2, 'Community hospital serving diverse population', 14.6196, 120.9774),
('Medical Center Manila', 1, 'Manila', 'Metro Manila', '1122 General Luna Street, Ermita, Manila', '(02) 5254-0011', 'info@medicalcentermanila.com.ph', 'https://www.medicalcentermanila.com.ph', 4.4, 'Historic hospital in the heart of Manila', 14.5842, 120.9794),
('Metropolitan Medical Center', 1, 'Manila', 'Metro Manila', '1357 G. Masangkay Street, Sta. Cruz, Manila', '(02) 8711-9061', 'info@mmc.com.ph', 'https://www.mmc.com.ph', 4.0, 'Comprehensive healthcare services in Manila', 14.6138, 120.9845),

-- CENTRAL LUZON (Region III)
('Angeles University Foundation Medical Center', 5, 'Angeles City', 'Pampanga', 'MacArthur Highway, Angeles City', '(045) 625-2888', 'info@auf.edu.ph', 'https://www.auf.edu.ph', 4.3, 'Premier medical center in Central Luzon', 15.1449, 120.5934),
('Jose B. Lingad Memorial Regional Hospital', 5, 'San Fernando', 'Pampanga', 'Dolores, San Fernando, Pampanga', '(045) 455-2872', 'info@jblmrh.gov.ph', 'https://www.jblmrh.gov.ph', 4.1, 'Regional government hospital serving Central Luzon', 15.0356, 120.6897),
('Cabanatuan General Hospital', 5, 'Cabanatuan City', 'Nueva Ecija', 'Maharlika Highway, Cabanatuan City', '(044) 463-1234', 'info@cgh.gov.ph', 'https://www.cgh.gov.ph', 3.9, 'Government hospital serving Nueva Ecija', 15.4859, 120.9671),
('Diosdado P. Macapagal Memorial Hospital', 5, 'Mariveles', 'Bataan', 'National Highway, Mariveles, Bataan', '(047) 935-2021', 'info@dpmh.gov.ph', 'https://www.dpmh.gov.ph', 4.0, 'Regional hospital serving Bataan province', 14.4299, 120.4901),

-- CALABARZON (Region IV-A)
('Batangas Medical Center', 6, 'Batangas City', 'Batangas', 'Gov. Feliciano Leviste Drive, Batangas City', '(043) 723-2151', 'info@bmc.gov.ph', 'https://www.bmc.gov.ph', 4.2, 'Premier medical facility in Batangas', 13.7565, 121.0583),
('Medical Center Imus', 6, 'Imus', 'Cavite', 'Nueno Avenue, Imus, Cavite', '(046) 471-2460', 'info@mci.com.ph', 'https://www.mci.com.ph', 4.1, 'Leading hospital in Cavite province', 14.4297, 120.9370),
('Calamba Medical Center', 6, 'Calamba', 'Laguna', 'Real Street, Calamba, Laguna', '(049) 545-2201', 'info@cmc.com.ph', 'https://www.cmc.com.ph', 4.0, 'Community hospital serving Laguna', 14.2088, 121.1617),
('De La Salle Medical Center', 6, 'Dasmariñas', 'Cavite', 'Congressional Avenue Extension, Dasmariñas, Cavite', '(046) 481-8000', 'info@dlsmc.com.ph', 'https://www.dlsmc.com.ph', 4.4, 'University hospital with modern facilities', 14.3294, 120.9366),

-- ILOCOS REGION (Region I)
('Ilocos Training and Regional Medical Center', 3, 'San Fernando', 'La Union', 'Carlatan, San Fernando, La Union', '(072) 888-2464', 'info@itrmc.gov.ph', 'https://www.itrmc.gov.ph', 4.2, 'Regional medical center serving Ilocos Region', 16.6158, 120.3209),
('Mariano Marcos Memorial Hospital', 3, 'Batac', 'Ilocos Norte', 'Batac, Ilocos Norte', '(077) 792-3018', 'info@mmmh.gov.ph', 'https://www.mmmh.gov.ph', 4.0, 'Government hospital in Ilocos Norte', 18.0553, 120.5644),
('Region I Medical Center', 3, 'Dagupan City', 'Pangasinan', 'Mayombo District, Dagupan City', '(075) 523-8888', 'info@r1mc.gov.ph', 'https://www.r1mc.gov.ph', 4.1, 'Regional hospital serving Pangasinan', 16.0433, 120.3334),

-- CAGAYAN VALLEY (Region II)
('Cagayan Valley Medical Center', 4, 'Tuguegarao City', 'Cagayan', 'Maharlika Highway, Tuguegarao City', '(078) 844-1341', 'info@cvmc.gov.ph', 'https://www.cvmc.gov.ph', 4.0, 'Regional medical center in Cagayan Valley', 17.6132, 121.7270),
('Region II Trauma and Medical Center', 4, 'Tuguegarao City', 'Cagayan', 'Regional Government Center, Tuguegarao City', '(078) 304-5555', 'info@r2tmc.gov.ph', 'https://www.r2tmc.gov.ph', 4.1, 'Specialized trauma center in the region', 17.6160, 121.7437),

-- BICOL REGION (Region V)
('Bicol Medical Center', 8, 'Naga City', 'Camarines Sur', 'Naga City, Camarines Sur', '(054) 473-2156', 'info@bmc.gov.ph', 'https://www.bmc.gov.ph', 4.1, 'Premier medical facility in Bicol Region', 13.6218, 123.1948),
('Aquinas University Hospital', 8, 'Legazpi City', 'Albay', 'Rawis, Legazpi City, Albay', '(052) 820-6688', 'hospital@aquinas.edu.ph', 'https://www.aquinas.edu.ph', 4.0, 'University hospital serving Albay province', 13.1391, 123.7436),
('Camarines Sur Provincial Hospital', 8, 'Pili', 'Camarines Sur', 'Pili, Camarines Sur', '(054) 477-5021', 'info@csph.gov.ph', 'https://www.csph.gov.ph', 3.9, 'Provincial hospital serving Camarines Sur', 13.5827, 123.2831),

-- WESTERN VISAYAS (Region VI)
('The Medical City Iloilo', 9, 'Iloilo City', 'Iloilo', 'Metroplex Mall Complex, Mandurriao, Iloilo City', '(033) 501-0400', 'info@tmciloilo.com', 'https://www.tmciloilo.com', 4.5, 'Premier tertiary hospital in Western Visayas', 10.7460, 122.5621),
('Western Visayas Medical Center', 9, 'Iloilo City', 'Iloilo', 'Q. Abeto Street, Mandurriao, Iloilo City', '(033) 321-1532', 'info@wvmc.gov.ph', 'https://www.wvmc.gov.ph', 4.2, 'Regional government medical center', 10.7309, 122.5621),
('St. Paul''s Hospital Iloilo', 9, 'Iloilo City', 'Iloilo', 'General Luna Street, Iloilo City', '(033) 337-3178', 'info@sphi.com.ph', 'https://www.sphi.com.ph', 4.3, 'Catholic hospital with comprehensive services', 10.6919, 122.5621),
('Corazon Locsin Montelibano Memorial Regional Hospital', 9, 'Bacolod City', 'Negros Occidental', 'Lacson Street, Bacolod City', '(034) 434-5454', 'info@clmmrh.gov.ph', 'https://www.clmmrh.gov.ph', 4.1, 'Regional hospital serving Negros Occidental', 10.6740, 122.9503),
('Riverside Medical Center', 9, 'Bacolod City', 'Negros Occidental', 'Dolores Street, Bacolod City', '(034) 434-4102', 'info@rmc.com.ph', 'https://www.rmc.com.ph', 4.0, 'Private hospital in Bacolod City', 10.6692, 122.9503),

-- CENTRAL VISAYAS (Region VII) - Additional
('Vicente Sotto Memorial Medical Center', 10, 'Cebu City', 'Cebu', 'B. Rodriguez Street, Cebu City', '(032) 253-9891', 'info@vsmmc.gov.ph', 'https://www.vsmmc.gov.ph', 4.2, 'Government tertiary hospital in Cebu', 10.3157, 123.8854),
('Chong Hua Hospital', 10, 'Cebu City', 'Cebu', 'Don Mariano Cui Street, Cebu City', '(032) 255-8000', 'info@chonghua.com.ph', 'https://www.chonghua.com.ph', 4.4, 'Leading private hospital in Cebu', 10.3019, 123.8945),
('UC Medical Center', 10, 'Cebu City', 'Cebu', 'Salinas Drive, Lahug, Cebu City', '(032) 232-3000', 'info@ucmed.edu.ph', 'https://www.ucmed.edu.ph', 4.1, 'University medical center with modern facilities', 10.3321, 123.9062),
('Governor Celestino Gallares Memorial Hospital', 10, 'Tagbilaran City', 'Bohol', 'CPG North Avenue, Tagbilaran City', '(038) 501-8888', 'info@gcgmh.gov.ph', 'https://www.gcgmh.gov.ph', 4.0, 'Provincial hospital serving Bohol', 9.6497, 123.8621),

-- EASTERN VISAYAS (Region VIII)
('Eastern Visayas Regional Medical Center', 11, 'Tacloban City', 'Leyte', 'Magsaysay Boulevard, Tacloban City', '(053) 323-2669', 'info@evrmc.gov.ph', 'https://www.evrmc.gov.ph', 4.1, 'Regional medical center in Eastern Visayas', 11.2421, 125.0048),
('Divine Word Hospital', 11, 'Tacloban City', 'Leyte', 'Paterno Street, Tacloban City', '(053) 321-2731', 'info@dwh.com.ph', 'https://www.dwh.com.ph', 4.0, 'Private hospital serving Leyte province', 11.2437, 125.0048),

-- ZAMBOANGA PENINSULA (Region IX)
('Zamboanga City Medical Center', 12, 'Zamboanga City', 'Zamboanga del Sur', 'Dr. Evangelista Street, Zamboanga City', '(062) 991-0871', 'info@zcmc.gov.ph', 'https://www.zcmc.gov.ph', 4.0, 'Government medical center in Zamboanga', 6.9214, 122.0790),
('Brent Hospital and Colleges', 12, 'Zamboanga City', 'Zamboanga del Sur', 'Governor Camins Avenue, Zamboanga City', '(062) 991-1932', 'hospital@brenthospital.edu.ph', 'https://www.brenthospital.edu.ph', 4.2, 'University hospital with quality healthcare', 6.9175, 122.0739),

-- NORTHERN MINDANAO (Region X) - Additional
('JR Borja General Hospital', 11, 'Cagayan de Oro City', 'Misamis Oriental', 'J.R. Borja Street, Cagayan de Oro City', '(088) 856-4093', 'info@jrbgh.gov.ph', 'https://www.jrbgh.gov.ph', 4.0, 'Government hospital in Cagayan de Oro', 8.4542, 124.6319),
('Capitol University Medical Center', 11, 'Cagayan de Oro City', 'Misamis Oriental', 'Corrales Avenue, Cagayan de Oro City', '(088) 858-4092', 'hospital@cu.edu.ph', 'https://www.cu.edu.ph', 4.1, 'University medical center with comprehensive services', 8.4778, 124.6472),
('Polymedic General Hospital', 11, 'Cagayan de Oro City', 'Misamis Oriental', 'Tiano Brothers Street, Cagayan de Oro City', '(088) 857-2737', 'info@polymedic.com.ph', 'https://www.polymedic.com.ph', 4.0, 'Private general hospital', 8.4861, 124.6583),

-- DAVAO REGION (Region XI) - Additional
('Southern Philippines Medical Center', 12, 'Davao City', 'Davao del Sur', 'J.P. Laurel Avenue, Bajada, Davao City', '(082) 227-2731', 'info@spmc.gov.ph', 'https://www.spmc.gov.ph', 4.3, 'Leading government hospital in Mindanao', 7.0731, 125.6128),
('Brokenshire Memorial Hospital', 12, 'Davao City', 'Davao del Sur', 'Madapo Hills, Davao City', '(082) 241-3000', 'info@brokenshire.edu.ph', 'https://www.brokenshire.edu.ph', 4.2, 'Private hospital with scenic location', 7.0948, 125.6105),
('San Pedro Hospital', 12, 'Davao City', 'Davao del Sur', 'J.P. Cabaguio Avenue, Davao City', '(082) 227-8351', 'info@sanpedro.com.ph', 'https://www.sanpedro.com.ph', 4.1, 'Community hospital serving Davao', 7.0669, 125.6128),

-- SOCCSKSARGEN (Region XII)
('South Cotabato Provincial Hospital', 14, 'Koronadal City', 'South Cotabato', 'Koronadal City, South Cotabato', '(083) 228-5555', 'info@scph.gov.ph', 'https://www.scph.gov.ph', 4.0, 'Provincial hospital serving South Cotabato', 6.5008, 124.8447),
('St. Elizabeth Hospital', 14, 'General Santos City', 'South Cotabato', 'National Highway, General Santos City', '(083) 552-5281', 'info@seh.com.ph', 'https://www.seh.com.ph', 4.1, 'Private hospital in General Santos', 6.1164, 125.1716),

-- CARAGA (Region XIII)
('Caraga Regional Hospital', 15, 'Butuan City', 'Agusan del Norte', 'J.C. Aquino Avenue, Butuan City', '(085) 342-5598', 'info@crh.gov.ph', 'https://www.crh.gov.ph', 4.0, 'Regional hospital serving Caraga region', 8.9470, 125.5406),
('Butuan Medical Center', 15, 'Butuan City', 'Agusan del Norte', 'Montilla Boulevard, Butuan City', '(085) 342-3333', 'info@bmc.com.ph', 'https://www.bmc.com.ph', 3.9, 'Private medical center in Butuan', 8.9511, 125.5378),

-- CORDILLERA ADMINISTRATIVE REGION (CAR) - Additional
('Benguet General Hospital', 2, 'La Trinidad', 'Benguet', 'Km. 5, La Trinidad, Benguet', '(074) 424-4216', 'info@bgh.gov.ph', 'https://www.bgh.gov.ph', 4.0, 'Provincial hospital serving Benguet', 16.4634, 120.5897),
('Notre Dame de Chartres Hospital', 2, 'Baguio City', 'Benguet', 'Legarda Road, Baguio City', '(074) 424-2201', 'info@ndch.com.ph', 'https://www.ndch.com.ph', 4.1, 'Private hospital in Baguio City', 16.4138, 120.5934);

-- Now let's add rooms for all these new hospitals
-- This will add 3-4 room types per hospital with realistic pricing based on region

-- Helper function to add rooms for hospitals
-- We'll add rooms for hospitals with IDs 8 onwards (the new ones)

-- NCR Hospitals (Higher prices due to location)
-- The Medical City (hospital_id = 8)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(8, 1, 'Standard Room', 10000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi", "Nurse Call Button"]', 'Modern standard room with city view'),
(8, 2, 'Deluxe Room', 15000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Refrigerator", "Wi-Fi"]', 'Spacious deluxe room with premium amenities'),
(8, 3, 'Premier Suite', 35000.00, 4, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Kitchen/Kitchenette", "Balcony"]', 'Luxury suite with panoramic city views'),
(8, 4, 'ICU', 20000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment", "Cardiac Monitor"]', 'State-of-the-art intensive care unit');

-- Cardinal Santos Medical Center (hospital_id = 9)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(9, 1, 'Standard Room', 9500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi"]', 'Comfortable standard accommodation'),
(9, 2, 'Deluxe Room', 14000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Refrigerator", "Wi-Fi"]', 'Enhanced room with modern facilities'),
(9, 3, 'Executive Suite', 28000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Kitchen/Kitchenette"]', 'Executive-level suite with premium services'),
(9, 4, 'ICU', 18000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Advanced critical care facility');

-- Asian Hospital and Medical Center (hospital_id = 10)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(10, 1, 'Standard Room', 11000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi", "Nurse Call Button"]', 'World-class standard room'),
(10, 2, 'Deluxe Room', 16000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Refrigerator", "Wi-Fi"]', 'Premium deluxe accommodation'),
(10, 3, 'Presidential Suite', 40000.00, 6, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Kitchen/Kitchenette", "Balcony"]', 'Luxury presidential suite'),
(10, 4, 'ICU', 22000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment", "Cardiac Monitor"]', 'Premium intensive care unit');

-- Central Luzon Hospitals (Moderate pricing)
-- Angeles University Foundation Medical Center (hospital_id = 15)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(15, 1, 'Standard Room', 6500.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Standard room with essential amenities'),
(15, 2, 'Deluxe Room', 9500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Wi-Fi"]', 'Upgraded room with additional comfort'),
(15, 3, 'VIP Suite', 18000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Refrigerator"]', 'VIP-level accommodation'),
(15, 4, 'ICU', 12000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Comprehensive critical care');

-- Regional Hospitals (Lower pricing)
-- Ilocos Training and Regional Medical Center (hospital_id = 19)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(19, 1, 'Standard Ward', 3500.00, 1, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Standard ward accommodation'),
(19, 7, 'Private Room', 5500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi"]', 'Private room with basic amenities'),
(19, 8, 'Semi-Private Ward', 4500.00, 2, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Shared room for 2 patients'),
(19, 4, 'ICU', 8500.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Regional ICU facility');

-- Visayas Hospitals (Moderate pricing)
-- The Medical City Iloilo (hospital_id = 24)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(24, 1, 'Standard Room', 7500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi"]', 'Premium standard room in Iloilo'),
(24, 2, 'Deluxe Room', 11000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Refrigerator", "Wi-Fi"]', 'Deluxe accommodation with city views'),
(24, 3, 'Executive Suite', 22000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Kitchen/Kitchenette"]', 'Executive suite with premium amenities'),
(24, 4, 'ICU', 15000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Advanced ICU in Western Visayas');

-- Mindanao Hospitals (Budget-friendly pricing)
-- Southern Philippines Medical Center (hospital_id = 38)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(38, 1, 'Standard Ward', 4000.00, 1, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Government hospital standard ward'),
(38, 7, 'Private Room', 6500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi"]', 'Private room with modern amenities'),
(38, 8, 'Semi-Private Ward', 5000.00, 2, '["Air Conditioning", "Television", "Private Bathroom"]', 'Semi-private accommodation'),
(38, 4, 'ICU', 10000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Regional ICU facility');

-- Continue adding rooms for remaining hospitals with similar patterns...
-- (For brevity, showing pattern - you can continue this for all hospitals)

-- Add more sample rooms for variety across different hospitals
-- This creates a more realistic dataset with varying prices and amenities

-- Update hospital statistics
UPDATE hospitals SET 
  updated_at = NOW()
WHERE id >= 8;

-- Create indexes for better search performance on new data
CREATE INDEX IF NOT EXISTS idx_hospitals_province ON hospitals(province);
CREATE INDEX IF NOT EXISTS idx_hospitals_name_search ON hospitals USING gin(to_tsvector('english', name || ' ' || city || ' ' || province));

-- Add rooms for all remaining hospitals with realistic pricing

-- Veterans Memorial Medical Center (hospital_id = 11) - Government rates
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(11, 1, 'Standard Ward', 2500.00, 1, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Government hospital standard ward'),
(11, 7, 'Private Room', 4500.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Private room for veterans and civilians'),
(11, 8, 'Semi-Private Ward', 3500.00, 2, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Shared accommodation'),
(11, 4, 'ICU', 7500.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Veterans hospital ICU');

-- Manila Doctors Hospital (hospital_id = 12)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(12, 1, 'Standard Room', 8500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi"]', 'Historic hospital with modern amenities'),
(12, 2, 'Deluxe Room', 12500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Wi-Fi"]', 'Enhanced comfort in Manila'),
(12, 3, 'Suite', 24000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area"]', 'Traditional suite with modern updates'),
(12, 4, 'ICU', 16000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Established ICU facility');

-- Chinese General Hospital (hospital_id = 13)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(13, 1, 'Standard Room', 7000.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Community hospital standard room'),
(13, 2, 'Deluxe Room', 10500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa"]', 'Comfortable deluxe accommodation'),
(13, 7, 'Private Room', 8500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi"]', 'Private room with amenities'),
(13, 4, 'ICU', 13000.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Community ICU facility');

-- Medical Center Manila (hospital_id = 14)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(14, 1, 'Standard Room', 8000.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Historic Manila hospital room'),
(14, 2, 'Deluxe Room', 12000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Refrigerator"]', 'Upgraded room with amenities'),
(14, 3, 'Heritage Suite', 22000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area"]', 'Historic charm with modern comfort'),
(14, 4, 'ICU', 15000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Modern ICU in historic setting');

-- Jose B. Lingad Memorial Regional Hospital (hospital_id = 16) - Regional government rates
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(16, 1, 'Standard Ward', 3000.00, 1, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Regional hospital standard ward'),
(16, 7, 'Private Room', 5000.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Private room in Central Luzon'),
(16, 8, 'Semi-Private Ward', 4000.00, 2, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Semi-private accommodation'),
(16, 4, 'ICU', 8000.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Regional ICU facility');

-- Batangas Medical Center (hospital_id = 18)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(18, 1, 'Standard Room', 5500.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Provincial medical center standard room'),
(18, 2, 'Deluxe Room', 8000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Wi-Fi"]', 'Enhanced room in Batangas'),
(18, 3, 'VIP Suite', 15000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area"]', 'VIP accommodation'),
(18, 4, 'ICU', 10000.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Provincial ICU facility');

-- Continue with Visayas hospitals...

-- Western Visayas Medical Center (hospital_id = 25)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(25, 1, 'Standard Ward', 3500.00, 1, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Regional government hospital ward'),
(25, 7, 'Private Room', 5500.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Private room in Iloilo'),
(25, 8, 'Semi-Private Ward', 4500.00, 2, '["Air Conditioning", "Television", "Private Bathroom"]', 'Semi-private accommodation'),
(25, 4, 'ICU', 9000.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Regional ICU in Western Visayas');

-- St. Paul's Hospital Iloilo (hospital_id = 26)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(26, 1, 'Standard Room', 6500.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Catholic hospital standard room'),
(26, 2, 'Deluxe Room', 9500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Wi-Fi"]', 'Deluxe room with Christian care'),
(26, 3, 'Family Suite', 17000.00, 4, '["Air Conditioning", "Television", "Private Bathroom", "Living Area"]', 'Family-oriented suite'),
(26, 4, 'ICU', 12000.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Catholic hospital ICU');

-- Vicente Sotto Memorial Medical Center (hospital_id = 29)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(29, 1, 'Standard Ward', 3000.00, 1, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Government hospital in Cebu'),
(29, 7, 'Private Room', 5000.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Private room with city view'),
(29, 8, 'Semi-Private Ward', 4000.00, 2, '["Air Conditioning", "Television", "Private Bathroom"]', 'Shared accommodation'),
(29, 4, 'ICU', 8500.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Government ICU facility');

-- Chong Hua Hospital (hospital_id = 30)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(30, 1, 'Standard Room', 7500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Wi-Fi"]', 'Premium private hospital room'),
(30, 2, 'Deluxe Room', 11000.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Refrigerator", "Wi-Fi"]', 'Luxury deluxe accommodation'),
(30, 3, 'Executive Suite', 21000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Kitchen/Kitchenette"]', 'Executive-level suite'),
(30, 4, 'ICU', 14000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Premium ICU facility');

-- Eastern Visayas Regional Medical Center (hospital_id = 33)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(33, 1, 'Standard Ward', 3200.00, 1, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Regional hospital in Tacloban'),
(33, 7, 'Private Room', 5200.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Private room in Eastern Visayas'),
(33, 8, 'Semi-Private Ward', 4200.00, 2, '["Air Conditioning", "Television", "Private Bathroom"]', 'Semi-private accommodation'),
(33, 4, 'ICU', 8800.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Regional ICU facility');

-- Mindanao hospitals...

-- Zamboanga City Medical Center (hospital_id = 35)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(35, 1, 'Standard Ward', 2800.00, 1, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Government hospital in Zamboanga'),
(35, 7, 'Private Room', 4500.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Private room with security'),
(35, 8, 'Semi-Private Ward', 3500.00, 2, '["Air Conditioning", "Television", "Shared Bathroom"]', 'Semi-private ward'),
(35, 4, 'ICU', 7500.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'Regional ICU in Zamboanga');

-- Brent Hospital and Colleges (hospital_id = 36)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(36, 1, 'Standard Room', 5000.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'University hospital standard room'),
(36, 2, 'Deluxe Room', 7500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Wi-Fi"]', 'Enhanced university hospital room'),
(36, 3, 'Student Suite', 12000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area"]', 'Suite for extended stays'),
(36, 4, 'ICU', 9500.00, 1, '["24/7 Monitoring", "Ventilator Ready"]', 'University hospital ICU');

-- Brokenshire Memorial Hospital (hospital_id = 39)
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(39, 1, 'Standard Room', 5800.00, 1, '["Air Conditioning", "Television", "Private Bathroom"]', 'Private hospital with mountain views'),
(39, 2, 'Deluxe Room', 8500.00, 1, '["Air Conditioning", "Television", "Private Bathroom", "Sofa", "Wi-Fi"]', 'Deluxe room with scenic views'),
(39, 3, 'Hillside Suite', 16000.00, 2, '["Air Conditioning", "Television", "Private Bathroom", "Living Area", "Balcony"]', 'Suite with panoramic views'),
(39, 4, 'ICU', 11000.00, 1, '["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"]', 'Modern ICU facility');

-- Add comprehensive reviews for better user experience
INSERT INTO reviews (hospital_id, user_name, rating, title, comment, is_verified, created_at) VALUES

-- Metro Manila Reviews
(8, 'Maria Santos', 5, 'Excellent Service', 'The Medical City provided outstanding care during my surgery. The staff was professional and the facilities are world-class.', true, NOW() - INTERVAL '30 days'),
(8, 'John Cruz', 4, 'Good Experience', 'Clean facilities and competent medical staff. The only issue was the long waiting time.', true, NOW() - INTERVAL '15 days'),
(8, 'Linda Aquino', 5, 'Top-notch Healthcare', 'Best hospital experience I have ever had. The doctors are highly skilled and the nurses are very caring.', true, NOW() - INTERVAL '60 days'),

(9, 'Ana Reyes', 5, 'Highly Recommended', 'Cardinal Santos has been our family hospital for years. Consistently excellent service and care.', true, NOW() - INTERVAL '45 days'),
(9, 'Michael Torres', 4, 'Professional Staff', 'The medical team at Cardinal Santos is very professional. Good facilities and clean environment.', true, NOW() - INTERVAL '25 days'),

(10, 'Robert Tan', 4, 'Modern Facilities', 'Asian Hospital has state-of-the-art equipment and well-trained staff. Great experience overall.', true, NOW() - INTERVAL '20 days'),
(10, 'Sarah Kim', 5, 'World-class Care', 'Excellent hospital with international standards. The staff speaks multiple languages which was very helpful.', true, NOW() - INTERVAL '40 days'),

(11, 'Eduardo Ramos', 4, 'Good Government Hospital', 'VMMC provides quality healthcare for veterans and civilians. Affordable rates with decent service.', true, NOW() - INTERVAL '50 days'),
(11, 'Teresa Valdez', 3, 'Long Wait Times', 'Good medical care but expect long waiting times. Staff is helpful once you get to see them.', true, NOW() - INTERVAL '35 days'),

-- Regional Reviews
(15, 'Elena Garcia', 4, 'Good Regional Hospital', 'Angeles University Foundation provides quality healthcare in Central Luzon. Professional staff and clean facilities.', true, NOW() - INTERVAL '25 days'),
(15, 'Ramon dela Cruz', 4, 'Affordable Quality', 'Good value for money. The doctors are competent and the facilities are well-maintained.', true, NOW() - INTERVAL '18 days'),

(16, 'Carmen Santos', 4, 'Reliable Regional Care', 'Jose B. Lingad Memorial serves the region well. Good emergency services and competent staff.', true, NOW() - INTERVAL '22 days'),

(18, 'Jose Mercado', 4, 'Good Provincial Hospital', 'Batangas Medical Center offers quality healthcare in the province. Modern equipment and skilled doctors.', true, NOW() - INTERVAL '28 days'),

(19, 'Luz Fernandez', 4, 'Regional Excellence', 'ITRMC provides excellent healthcare in the Ilocos region. Good facilities and caring staff.', true, NOW() - INTERVAL '33 days'),

-- Visayas Reviews
(24, 'Carlos Lopez', 5, 'Best in Iloilo', 'The Medical City Iloilo offers Manila-quality healthcare in the Visayas. Highly recommended.', true, NOW() - INTERVAL '10 days'),
(24, 'Rowena Jimenez', 4, 'Excellent Facilities', 'Modern hospital with excellent facilities. The staff is well-trained and professional.', true, NOW() - INTERVAL '42 days'),

(25, 'Antonio Vargas', 4, 'Good Government Hospital', 'WVMC provides reliable healthcare services in Western Visayas. Affordable and accessible.', true, NOW() - INTERVAL '30 days'),

(26, 'Rosario Cruz', 5, 'Compassionate Care', 'St. Pauls Hospital combines excellent medical care with Christian compassion. Highly recommended.', true, NOW() - INTERVAL '15 days'),

(29, 'Benjamin Uy', 4, 'Reliable Public Hospital', 'VSMMC is a dependable government hospital in Cebu. Good emergency services and affordable rates.', true, NOW() - INTERVAL '38 days'),

(30, 'Catherine Lim', 5, 'Premium Private Hospital', 'Chong Hua Hospital offers premium healthcare services in Cebu. Excellent facilities and professional staff.', true, NOW() - INTERVAL '12 days'),

-- Mindanao Reviews
(35, 'Fernando Chavez', 3, 'Basic Government Hospital', 'ZCMC provides basic healthcare services. Clean facilities but limited amenities.', true, NOW() - INTERVAL '45 days'),

(36, 'Gloria Mendez', 4, 'University Hospital', 'Brent Hospital offers good healthcare with educational value. Professional staff and modern equipment.', true, NOW() - INTERVAL '20 days'),

(38, 'Grace Mendoza', 4, 'Affordable Quality Care', 'SPMC provides excellent healthcare at affordable rates. Great option for government employees.', true, NOW() - INTERVAL '35 days'),
(38, 'Daniel Aguirre', 5, 'Leading Government Hospital', 'Best government hospital in Mindanao. Excellent doctors and comprehensive services.', true, NOW() - INTERVAL '8 days'),

(39, 'Patricia Silva', 4, 'Scenic Hospital', 'Brokenshire offers good healthcare with beautiful views. Peaceful environment for recovery.', true, NOW() - INTERVAL '27 days'),

-- Additional specialty reviews
(40, 'Miguel Rodriguez', 4, 'Good in Emergencies', 'San Pedro Hospital has excellent emergency services. Quick response and competent medical staff.', true, NOW() - INTERVAL '16 days'),

(43, 'Isabel Morales', 4, 'Regional Leader', 'Caraga Regional Hospital serves the region well. Good facilities for a government hospital.', true, NOW() - INTERVAL '31 days'),

(45, 'Consuelo Bautista', 4, 'Mountain Healthcare', 'Benguet General Hospital provides reliable healthcare in the mountains. Good emergency services.', true, NOW() - INTERVAL '40 days');

-- Add some emergency room pricing
INSERT INTO room_types (name, description) VALUES
('Emergency Room', 'Emergency medical care facility'),
('Operating Room', 'Surgical procedure room'),
('Maternity Room', 'Specialized room for childbirth');

-- Add emergency rooms to major hospitals
INSERT INTO rooms (hospital_id, room_type_id, name, price, capacity, amenities, description) VALUES
(1, 9, 'Emergency Room', 5000.00, 1, '["24/7 Monitoring", "Emergency Equipment", "Rapid Response"]', 'Emergency medical care'),
(2, 9, 'Emergency Room', 6000.00, 1, '["24/7 Monitoring", "Emergency Equipment", "Rapid Response"]', 'Emergency medical care'),
(8, 9, 'Emergency Room', 8000.00, 1, '["24/7 Monitoring", "Emergency Equipment", "Rapid Response", "Trauma Bay"]', 'Premium emergency care'),
(10, 9, 'Emergency Room', 9000.00, 1, '["24/7 Monitoring", "Emergency Equipment", "Rapid Response", "Trauma Bay"]', 'World-class emergency care'),
(24, 9, 'Emergency Room', 6500.00, 1, '["24/7 Monitoring", "Emergency Equipment", "Rapid Response"]', 'Emergency care in Iloilo'),
(38, 9, 'Emergency Room', 4500.00, 1, '["24/7 Monitoring", "Emergency Equipment", "Rapid Response"]', 'Government emergency care');

-- Final statistics update
UPDATE hospitals SET updated_at = NOW() WHERE id > 7;

-- Create final summary view for administrators
CREATE OR REPLACE VIEW hospital_summary AS
SELECT 
    r.name as region_name,
    COUNT(h.id) as hospital_count,
    AVG(h.rating) as avg_rating,
    MIN(room_prices.min_price) as cheapest_room,
    MAX(room_prices.max_price) as most_expensive_room
FROM regions r
LEFT JOIN hospitals h ON r.id = h.region_id AND h.is_active = true
LEFT JOIN (
    SELECT 
        hospital_id, 
        MIN(price) as min_price, 
        MAX(price) as max_price
    FROM rooms 
    WHERE is_available = true 
    GROUP BY hospital_id
) room_prices ON h.id = room_prices.hospital_id
GROUP BY r.id, r.name
ORDER BY hospital_count DESC;
