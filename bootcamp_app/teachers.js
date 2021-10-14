const { Pool } = require('pg');
const {argv} = require('process');

const usableArgs = argv.slice(2);

const pool = new Pool({
  user: 'tomzhang',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});

console.log(usableArgs);

pool.query(`
  SELECT DISTINCT(teachers.name), cohorts.name
  FROM assistance_requests
  JOIN students ON students.id = assistance_requests.student_id
  JOIN teachers ON teachers.id = assistance_requests.teacher_id
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name = '${usableArgs[0]}' || 'JUL02';
`).then(res => {
  res.rows.forEach(user => {
    // console.log(res.rows);
    console.log(user);
  });
});