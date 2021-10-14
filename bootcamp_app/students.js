const { Pool } = require('pg');
const {argv} = require('process');

const usableArgs = argv.slice(2);

const pool = new Pool({
  user: 'tomzhang',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});

// console.log(usableArgs);

pool.query(`
  SELECT students.id, students.name, cohorts.name cohname
  FROM students
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${usableArgs[0]}%'
  LIMIT ${usableArgs[1]};
`).then(res => {
  res.rows.forEach(user => {
    // console.log(res.rows);
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohname} cohort`);
  });
});