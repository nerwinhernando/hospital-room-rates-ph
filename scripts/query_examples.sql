-- Search hospitals
SELECT * FROM search_hospitals('Makati');

-- Get rooms by price range
SELECT * FROM get_rooms_by_price_range(5000, 15000, 'Deluxe Room');

-- Get hospitals in a region
SELECT h.*, r.name as region_name 
FROM hospitals h 
JOIN regions r ON h.region_id = r.id 
WHERE r.name = 'National Capital Region';
