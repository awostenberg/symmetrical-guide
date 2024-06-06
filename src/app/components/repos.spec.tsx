import { render, screen } from "@testing-library/react";
import Repos from './repos';

describe('repos component', () => {

    it.todo('fetches real greg (contract integration test)');
        // see https://martinfowler.com/bliki/ContractTest.html
    
    it.todo('fetches and renders zero repo');    //that /and/ is a clue -- not a single responsibility
    it('fetches and renders one repo greg', () => {
     
        render(<Repos user="greg" />);     

        expect(screen.getByRole('heading').textContent).toContain('Repos for greg')

    });
    it.todo('renders many repo greg');  
    it.todo('renders oops');  // could be no such user, or, less likely, some git problem with good user greg (outage?)
})