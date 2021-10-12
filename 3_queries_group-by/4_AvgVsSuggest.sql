SELECT students.name, AVG(assignment_submissions.duration), AVG(assignments.duration)
FROM assignment_submissions
LEFT JOIN students ON students.id = assignment_submissions.student_id
LEFT JOIN assignments ON assignments.id = assignment_submissions.assignment_id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration)
ORDER BY AVG(assignment_submissions.duration) ASC;