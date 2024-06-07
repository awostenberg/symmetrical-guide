import { render, screen } from "@testing-library/react";
import UserRepos from './page';

 //todo loosen coupling: following data and mock coupled to component UserRepos calls. 
import greg from '../../components/greg.spec.sample.json';

import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe('user repos page', () => {
    it('renders the page', async () => {

        fetchMock.resetMocks();
        fetchMock.mockResponseOnce(JSON.stringify(greg));

        const u = {'user':'greg'}
        const jsx = await UserRepos({'params':u}) 
        render(jsx);

        expect(screen.getByRole('heading').textContent).toContain('User greg Repo Page')


        const headers = screen.getAllByRole("columnheader").map( item => item.textContent);
        expect(headers).toContain("Repo Name")
        const rows = screen.getAllByRole('row');
        expect(rows[1].textContent).toContain("CodableInterception");
        
      
        expect(rows[1].textContent).toContain("A generalised library")
  
    })
})