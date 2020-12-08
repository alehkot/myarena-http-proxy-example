'use strict';

const got = require('got');

module.exports.time = async (event) => {
  try {
    const { id } = event.pathParameters;

    // Check if number.
    if (!/^\d+$/.test(id))
      return {
        statusCode: 400,
        body: 'Invalid time provided',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };

    const targetUrl = `http://rushogwarts.myarena.ru/time/${id}`;
    const response = await got(targetUrl);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: response.body,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 502,
      body: 'Unable to reach upstream server',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
