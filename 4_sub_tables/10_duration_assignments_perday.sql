SELECT assignments.day, COUNT(*) number_of_assignments, SUM(duration) duration
FROM  assignments 
GROUP BY assignments.day
ORDER BY day ASC