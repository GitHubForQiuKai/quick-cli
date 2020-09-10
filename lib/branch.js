const { Octokit } = require("@octokit/rest");
// http 请求
const octokit = new Octokit();

module.exports = async _ => {
    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/branches', {
            owner: 'GitHubForQiuKai',
            repo: 'quick-templates',
            per_page: 100
        })
        if (response && response.data) {
            return response.data
        }
    } catch (error) {
        console.log('read ECONNRESET')
    }
}