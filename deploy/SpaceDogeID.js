module.exports = async (hre) => {
  const accounts = await hre.getNamedAccounts();
  const deployer = accounts.admin;

  const {address: lib} = await hre.deployments.deploy("IterableMapping", {from: deployer, log: true,});

  const {address} = await hre.deployments.deploy("SpaceDogeID", {
    from: deployer,
    args: [
      "0x2dff88a56767223a5529ea5960da7a3f5f766406", // SPACE ID
      "0x10ed43c718714eb63d5aa57b78b54704e256024e", // router
      "0x26C46A0a9eb6a8630BE7137263524bDE4F7f8F3B", // marketing
      "0xBea8C6bb95a7468D92569F43fc3bd56c9ab32962", // pool
    ],
    log: true,
    libraries: {
      IterableMapping: lib,
    }
  });
};

module.exports.tags = ["SpaceDogeAI"];
