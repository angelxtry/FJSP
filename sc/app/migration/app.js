require('../../module/back/root/Orm.js');

console.log('마이그레이션!');

(async () => {
  const { SELECT, FROM, WHERE } = Orm;
  const { query } = await Orm.connect();
  const res = await query(
    SELECT `*`,
    FROM `pg_tables`,
    WHERE `schemaname = 'public' and tablename = 'migrations'`
  );
  console.log(res);
}) ();
