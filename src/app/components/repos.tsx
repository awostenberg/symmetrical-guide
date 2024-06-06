
async function fetchRepos(user:string) {
    const result = await fetch(`https://api.github.com/users/${user}/repos`);
    const repos:[any] = await result.json();  
    return repos; //todo maybe trim down to interesting bits (name, description), with a type?
};

const Repos = async ( {user} ) => {   //todo fix warning
    console.log(`going to fetch repos .. log the things Teacher wanted for ${user}`);
    const repos = await fetchRepos(user);
    console.log(`${repos.length} repos found for ${user}`);

    return repos;

};

//todo rename to repos.ts (if this does not return tsx)

export default Repos