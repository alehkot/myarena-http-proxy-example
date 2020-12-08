'use strict';

const got = require('got');

module.exports.time = async (event) => {
  try {
    const { id } = event.pathParameters;
    const response = await got(
      `http://rushogwarts.myarena.ru/time/${parseInt(id)}`
    );
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        ...response.body,
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 502,
      body: JSON.stringify({ message: 'Unable to reach upstream server' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
