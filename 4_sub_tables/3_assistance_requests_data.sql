SELECT   teachers.name, students.name, assignments.name,(completed_at - started_at) duration
FROM assistance_requests
JOIN students ON students.id = assistance_requests.student_id
JOIN teachers ON teachers.id = assistance_requests.teacher_id
JOIN assignments ON assignments.id = assistance_requests.assignment_id
ORDER BY duration;