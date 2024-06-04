
const fetchGitHubUsers = async () => {
    const res = await fetch("https://api.github.com/search/users?q=greg");
    const json = await res.json();
    return json.items;
};

const GitHubUsers = async () => {
    const users = await fetchGitHubUsers();
    //console.log(users); /see in log if cache clear4ed
    return (
        <div>
            <h1>GitHub Users Page</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>{users[0].login}</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>)
};
export default GitHubUsers