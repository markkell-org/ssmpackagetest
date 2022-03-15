'use strict';

module.exports.hello = async (event) => {
  const variable = process.env.SSM_PARAM;

  let message;
  if (variable) {
    message = `${variable} found!!!!!`;
  } else {
    message = ':( variable not found';
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message,
      },
      null,
      2
    ),
  };

};
