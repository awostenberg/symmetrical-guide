
import { render, screen } from "@testing-library/react";
import GitHubUsers from "../src/app/githubusers/page";
import fetchMock from "jest-fetch-mock";

describe("github user",() => {
    // how to render for test that which is async server side?
    // see https://www.marcusoft.net/2022/11/nextjs-testing-async-react-components.html
    it("renders the page", async () => {
        //render( <GitHubUsers />)

        //above does not work, because that's a promise (GitHubUsers, being async, returns a promise) 
        //while the render from react testing library can only work with JSX.Elements. it cannot use Promises.
        //But we know what to do with promises: we await them. 
        //And we know what to do with functions: we just call them using ().
        //for the tl;dr, see https://www.marcusoft.net/2022/11/nextjs-testing-async-react-components.html
        //but then it fails on fetch, most likely because jest-environment-jsdom is not really a browser, 
        //so we mock it out, with data called greg

      const greg = {  // sampled from "https://api.github.com/search/users?q=greg";
    
            "total_count": 51587,
            "incomplete_results": false,
            "items": [
              {
                "login": "greg",
                "id": 1658846,
                "node_id": "MDQ6VXNlcjE2NTg4NDY=",
                "avatar_url": "https://avatars.githubusercontent.com/u/1658846?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/greg",
                "html_url": "https://github.com/greg",
                "followers_url": "https://api.github.com/users/greg/followers",
                "following_url": "https://api.github.com/users/greg/following{/other_user}",
                "gists_url": "https://api.github.com/users/greg/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/greg/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/greg/subscriptions",
                "organizations_url": "https://api.github.com/users/greg/orgs",
                "repos_url": "https://api.github.com/users/greg/repos",
                "events_url": "https://api.github.com/users/greg/events{/privacy}",
                "received_events_url": "https://api.github.com/users/greg/received_events",
                "type": "User",
                "site_admin": false,
                "score": 1.0
              }]};

  
        fetchMock.mockResponseOnce(JSON.stringify(greg));
        const jsx = await GitHubUsers();

        render(jsx) ;
     
        expect(screen.getByRole("heading").textContent).toContain("GitHub Users Page");
       
    })
    it.todo("fetches from github for user greg (contract integration test)");
    // async https://www.perplexity.ai/search/how-to-do-uCKEYSQKSISDmxlwFIjFGQ 
    // no longer a isolated test because it depends on github, internet, etc.

    
})