const getBranches = require('../lib/branch')
const logger = require('../lib/logger')

module.exports = async () => {
    const branches = await getBranches();

    if (branches && branches.length) {
        for (let branch of branches) {
            logger.log(branch.name)
        }
    }
}