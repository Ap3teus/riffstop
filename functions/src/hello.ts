import { Handler } from 'aws-lambda';
import { db } from './common/db';

export const handler: Handler = async (event, context, callback) => {
  console.log('asd');
  const res = await db.any(`select * from foo;`);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(res),
  });
};
