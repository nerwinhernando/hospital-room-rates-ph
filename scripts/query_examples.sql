-- Search hospitals
SELECT * FROM search_hospitals('Makati');

-- Get rooms by price range
SELECT * FROM get_rooms_by_price_range(5000, 15000, 'Deluxe Room');

-- Get hospitals in a region
SELECT h.*, r.name as region_name 
FROM hospitals h 
JOIN regions r ON h.region_id = r.id 
WHERE r.name = 'National Capital Region';


-- Check total hospitals
SELECT COUNT(*) FROM hospitals;

-- Check hospitals by region
SELECT r.name, COUNT(h.id) as hospital_count
FROM regions r
LEFT JOIN hospitals h ON r.id = h.region_id
GROUP BY r.name
ORDER BY hospital_count DESC;

-- Check room count
SELECT COUNT(*) FROM rooms;
