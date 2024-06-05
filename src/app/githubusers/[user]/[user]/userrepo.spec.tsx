import { render, screen } from "@testing-library/react";
import UserRepos from './page';

describe('user repos page', () => {
    it('renders the page', () => {
        const u = {'user':'greg'}
        render(<UserRepos params={u} />)

        expect(screen.getByRole('heading').textContent).toContain('User greg Repo Page')

    })
})