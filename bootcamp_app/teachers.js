const { Pool } = require('pg');
const {argv} = require('process');

const rawArgs = argv.slice(2);

const pool = new Pool({
  user: 'tomzhang',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});

const usableArgs = [`%${rawArgs[0]}%`];

console.log(usableArgs);

pool.query(`
  SELECT DISTINCT(teachers.name), cohorts.name
  FROM assistance_requests
  JOIN students ON students.id = assistance_requests.student_id
  JOIN teachers ON teachers.id = assistance_requests.teacher_id
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name = '$1' || 'JUL02';
`, usableArgs).then(res => {
  res.rows.forEach(user => {
    // console.log(res.rows);
    console.log(user);
  });
});