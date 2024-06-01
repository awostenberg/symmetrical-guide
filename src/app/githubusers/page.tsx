
async function fetchGitHubUsers() {
    const res = await fetch("https://api.github.com/search/users?q=greg");
    const json = await res.json();
    return json.items;
}
const GitHubUsers =  async () => {
    const users = await fetchGitHubUsers();
    console.log(users); //not seeing this in the terminal users log loc.
    return (
        <div>
            <h1>GitHub Users Page</h1>
        </div>)
};
export default GitHubUsers