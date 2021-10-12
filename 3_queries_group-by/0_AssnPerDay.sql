SELECT assignments.day, COUNT(*)
FROM assignments
GROUP BY assignments.day
HAVING COUNT(*) >= 10
ORDER BY assignments.day;
