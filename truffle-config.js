module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
  development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 1000000,
  gasPrice: 22000000000 // Specified in Wei
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.4.22"// ex:  "0.4.20". (Default: Truffle's installed solc)
    }
 }
  //
};
