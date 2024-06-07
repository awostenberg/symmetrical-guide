
import Repos from '../../components/repos';

const UserRepos = async ({ params: { user } }) => {
    const result: [any] = await Repos({ user: user });

    return (
        <div>
            <h1>User {user} Repo Page</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Repo Name</th>
                            <th>Repo Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {result.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default UserRepos;