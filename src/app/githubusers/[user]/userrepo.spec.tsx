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

        //todo make it a table and check it's column header, table row
        const paragraphs = screen.getAllByRole('paragraph').map(item=>item.textContent);;
        expect(paragraphs[0]).toContain("CodableInterception");
        expect(paragraphs[1]).toContain("A generalised library");
       
    })
})