import { Handler } from 'aws-lambda';
import { db } from './common/db';

export const handler: Handler = async (event, context) => {
  console.log('asd');
  const res = await db.any(`select * from foo;`);

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
