module.exports = {
  servers: {
    one: {
      host: '104.236.217.141',
      username: 'root',
      // pem:
      password: '89a7e77fbf96c764'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'ajco',
    path: '.',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://104.236.217.141',
      //MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 15
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
