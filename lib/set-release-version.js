const {setVersion} = require('./maven')

module.exports = async (context) => {
    const {nextRelease, logger} = context;
    await setVersion(nextRelease.version, context);

    logger.log('Version changed to %s', nextRelease.version);
};
