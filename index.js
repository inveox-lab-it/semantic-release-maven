const setReleaseVersion = require('./lib/set-release-version');
const setNextSnapshotVersion = require('./lib/set-next-snapshot-vetsion')

async function prepare(pluginConfig, context) {
  return setReleaseVersion(context);
}

async function publish(pluginConfig, context) {
  return setNextSnapshotVersion(pluginConfig, context)
}

module.exports = { prepare, publish };
