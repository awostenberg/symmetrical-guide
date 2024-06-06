
import Repos from '../../components/repos';

const UserRepos = ( {params:{user}} ) => {
    //const result:[any] = Repos({user:user});
    return (<h1>User {user} Repo Page</h1>);
};

export default UserRepos;