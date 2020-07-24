const execa = require('execa');

async function setVersion(version, execOptions) {
    await execa('mvn', ['versions:set', '-DnewVersion=' + version], execOptions)
}

async function setNextSnapshotVersion(execOptions) {
    await execa('mvn', ['--batch-mode', 'release:update-versions'], execOptions);
}

module.exports = {setVersion, setNextSnapshotVersion}