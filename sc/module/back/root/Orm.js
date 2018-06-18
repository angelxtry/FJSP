require('../../share/root/Functional')
!function(Root) {
  const { reduce } = Functional;
  const { Pool } = require('pg');
  function query(pool, qs) {
    // console.log(qs);
    // console.log(reduce((a, b) => `${a} ${b}`, qs));
    return pool.query(reduce((a, b) => `${a} ${b}`, qs));
  }

  async function connect(info) {
    const pool = await new Pool(
      // {
      // user: 'leesh',
      // host: 'localhost',
      // database: 'sc',
      // password: '',
      // port: 5432,
    // }
  );
    return {
      query(...qs) {
        return query(pool, qs);
      },
      transaction() {

      }
    };
  }

  function SELECT(strs, ...vals) {
    return `SELECT ${strs[0]}`;
  }
  function FROM(strs, ...vals) {
    return `FROM ${strs[0]}`;
  }
  function WHERE(strs, ...vals) {
    return `WHERE ${strs[0]}`;
  }
  Root.Orm = {
    connect, 
    SELECT,
    FROM,
    WHERE,
  };
} (global);
