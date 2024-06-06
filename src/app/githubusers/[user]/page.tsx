
import Repos from '../../components/repos';

const UserRepos = async ({ params: { user } }) => {
    const result: [any] = await Repos({ user: user });
    const name1 = result[0].name;
    const description1 = result[0].description
    return (
        <div>
            <h1>User {user} Repo Page</h1>
            {result.map(item => (
                <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>

            ))}

        
        </div>

    );
};

export default UserRepos;