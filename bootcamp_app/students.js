const { Pool } = require('pg');
const {argv} = require('process');

const rawArgs = argv.slice(2);

const pool = new Pool({
  user: 'tomzhang',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});

const usableArgs = [`%${rawArgs[0]}%`, rawArgs[1] || 5];

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