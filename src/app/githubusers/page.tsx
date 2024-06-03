
async function fetchGitHubUsers() {
    const res = await fetch("https://api.github.com/search/users?q=greg");
    const json = await res.json();
    return json.items;
}
const GitHubUsers =  async () => {
    const users = await fetchGitHubUsers();
    //console.log(users); /see in log if cache clear4ed
    return (
        <div>
            <h1>GitHub Users Page</h1>
        </div>)
};
export default GitHubUsers