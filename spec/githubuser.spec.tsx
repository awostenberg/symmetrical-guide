
import { render, screen } from "@testing-library/react";
import GitHubUsers from "../src/app/githubusers/page";

describe("github user",() => {
    it("renders the page", () => {
        render( <GitHubUsers />)

        expect(screen.getByRole("heading").textContent).toContain("GitHub Users Page")
    
    })
})