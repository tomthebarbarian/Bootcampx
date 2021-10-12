SELECT *,MAX(duration)
FROM (SELECT cohorts.name, AVG(completed_at - started_at) duration
FROM assistance_requests
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohorts.name) average_times;