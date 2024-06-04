
import Link from 'next/link';

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
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (

                            <tr key={user.id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div>
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.avatar_url} />
                                                </div>
                                            </div>

                                        </div>

                                        <div>
                                            {user.login}

                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <Link href={user.html_url} className="btn btn-link">
                                    View on GitHub
                                    </Link>
                                
                                </td>
                                <td>Blue</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>)
};
export default GitHubUsers