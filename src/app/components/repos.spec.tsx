// name... I think it should be a verb.. or ReposFor(x)
import Repos from './repos';

import greg from './greg.spec.sample.json'; // sampled from https://api.github.com/users/greg/repos

import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe('repos component', () => {

    it.todo('fetches real greg (contract integration test)');
    // see https://martinfowler.com/bliki/ContractTest.html

    it.todo('fetches zero repo');
    it('fetches one repo', async () => {
        fetchMock.resetMocks();
        fetchMock.mockResponseOnce(JSON.stringify(greg));

        const repos = await Repos({ user: 'greg' });

        expect(fetchMock).toHaveBeenCalledWith("https://api.github.com/users/greg/repos");
        
        expect(repos).toHaveLength(1);
        expect(repos[0].name).toBe("CodableInterception");
        const description: string = repos[0].description;
        expect(description).toContain('A generalised library');

    });


    it.todo('fetches many repo ');
    it.todo('fetches oops');  // could be no such user, or, less likely, some git problem with good user greg (outage?)
})