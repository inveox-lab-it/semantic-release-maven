const execa = require('execa');

async function commit(message, execaOptions) {
  await execa('git', ['commit', '-a', '-m', message], execaOptions);
}

async function push(origin, branch, execaOptions) {
  await execa('git', ['push', '--tags', origin, `HEAD:${branch}`], execaOptions);
}

module.exports = {commit, push};
