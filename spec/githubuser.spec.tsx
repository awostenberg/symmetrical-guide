
import { render, screen } from "@testing-library/react";
import GitHubUsers from "../src/app/githubusers/page";

describe("github user",() => {
     //todo figure out await on render that is async
    it.skip("renders the page", async () => {
        render( <GitHubUsers />)

        //const headingElement = await screen.findByText("GitHub Users Page");
        expect(screen.getByRole("heading").textContent).toContain("GitHub Users Page")
       
    })
    it.todo("fetches from github for user greg (contract integration test)");
    // async https://www.perplexity.ai/search/how-to-do-uCKEYSQKSISDmxlwFIjFGQ 
    // no longer a isolated test because it depends on github, internet, etc.

    
})