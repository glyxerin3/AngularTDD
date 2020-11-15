module.exports = function (wallaby) {
    return {
      trace: true,
  
      files: [
        'src/**/*.js'
      ],
  
      tests: [
        'test/**/*.test.js'
      ],
  
      env: {
        type: 'node'
      },
    };
  };