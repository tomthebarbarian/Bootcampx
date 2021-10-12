SELECT cohorts.name, COUNT(*)
FROM students
LEFT JOIN assignment_submissions ON students.id = assignment_submissions.student_id
LEFT JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
ORDER BY COUNT(*) DESC;