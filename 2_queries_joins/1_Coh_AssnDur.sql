SELECT SUM(assignment_submissions.duration) 
FROM students
Left JOIN assignment_submissions ON students.id = assignment_submissions.student_id
LEFT JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'FEB12';