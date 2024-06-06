import { render, screen } from "@testing-library/react";
import Repos from './repos';

import greg from './greg.spec.sample.json'; // sampled from https://api.github.com/users/greg/repos

describe('repos component', () => {

    it.todo('fetches real greg (contract integration test)');
    // see https://martinfowler.com/bliki/ContractTest.html

    it.todo('fetches and renders zero repo');    //that /and/ is a clue -- not a single responsibility
    it('renders headline greg', () => {

        render(<Repos user="greg" />);

        expect(screen.getByRole('heading').textContent).toContain('Repos for greg')
        //todo redo above -- the Repos returns json not jsx; it is called repos.ts in fact to signal that -- not tsx. 
        //The actual render is called UserReposPage and matches above but is /not/ in the app/components directory.

    });


    it('fetches and renders one repo', () => {
        //arrange; set the mock. 

        //act
        render(<Repos user="greg" />);

        //assert
    })

    it.todo('renders many repo greg');
    it.todo('renders oops');  // could be no such user, or, less likely, some git problem with good user greg (outage?)
})