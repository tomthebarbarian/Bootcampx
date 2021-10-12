SELECT students.name, AVG(duration)
FROM students
LEFT JOIN assignment_submissions ON students.id = assignment_submissions.student_id
LEFT JOIN cohorts ON cohorts.id = students.cohort_id
WHERE students.end_date IS NULL
GROUP BY students.name
ORDER BY AVG(duration) DESC;