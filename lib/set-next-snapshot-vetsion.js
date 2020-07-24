const {template} = require('lodash');
const {setNextSnapshotVersion} = require('./maven')
const {commit, push} = require('./git')

module.exports = async (pluginConfig, context) => {
  const {message} = pluginConfig;
  const {
    env,
    cwd,
    branch,
    options: {repositoryUrl},
    logger,
  } = context;

  await setNextSnapshotVersion(context);
  await commit(
      message
          ? template(message)({branch: branch.name})
          : `chore(development): preparation for development, next snapshot version [skip ci]`,
      {env, cwd}
  )
  await push(repositoryUrl, branch.name, {env, cwd})

  logger.log('After release: version changed to next snapshot version');
};
