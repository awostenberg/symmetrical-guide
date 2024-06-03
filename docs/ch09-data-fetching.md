

# chapter 09 data fetching

## loc 485 stubbed github users page component

"our goal is to retrieve..." - Lim


but first, we create the test ```touch \spec\githubusers.spec.tsx```


once saved you should be directed to the appropriate page - Lim
 - worked; delightful. bottom-up. hand-check final part.

## loc 504 fetching from real github

So we wrote some code we did not know would checked it, found it worked.

On tdd way, this would be
- program to mock component for zero/one/many/oops
- contract integration test against real github to assure mock is faithful

marking ```it.todo```
I suspect that async gitHubUsers will require test revision... hopefully "async all the way up"

later.. a mere ```const GitHubUsers =  async () => {...}``` does break tests, I can't see how to fix them, the brilliant late night ```await render(...)``` did not do the trick, that test is marked ```it.skip``

## loc 536 save and see sapiential test
"..saving the changes and navigate to GitHub Users in terminal server logs, you'll see all the requierd data are retrieved." -Lim

I did not, at first. Launched chrome. Saw it. Not on brave. Maybe caching? stopped brave, restart, see terminal log. Assume server side cacheing.

Leave ```it.todo()``` as a reminder because the automated check does not pass.

Next session I'll have to decide whether to press on with the sapiential test-eventually way, or learn how the tdd habit applies in this.

## lock 504 revisit and solve test puzzler with a mock github

Two days later... undo the ```it.skip()```:

```
 render( <GitHubUsers />)
```
and re-verify the above still does not work. Why? 

We learn from a [master](https://www.marcusoft.net/2022/11/nextjs-testing-async-react-components.html)
that component returns a promise (```GitHubUsers```, being async, returns a promise) while the ```render``` from react testing library (RTL) ```render``` only works with ```JSX.Elements```. It cannot use promises. 

But we know what to do with promises: we await them. And we know what to do with funciton: we just call them using (). And with backtracking to a very simple component
```
const GitHubUsers =  async () => {

    return (
        <div>
            <h1>GitHub Users Page</h1>
        </div>)
};
```
we adjust the test accordingly:

    import { render, screen } from "@testing-library/react";
    import GitHubUsers from "../src/app/githubusers/page";
    import fetchMock from "jest-fetch-mock";

    describe("github user",() => {
        it("renders the page", async () => {
            const jsx = await GitHubUsers();
            render(jsx) ;
        
            expect(screen.getByRole("heading").textContent).toContain("GitHub Users Page");
        })

        
    })
And it passes.

But, then, to that simple component under test we add back Lim's fetch:
````
const GitHubUsers =  async () => {
    const users = await fetchGitHubUsers();
    return (
        <div>
            <h1>GitHub Users Page</h1>
        </div>)
}
````

Run the test, and, Lo! It fails on fetch. Why? 

Because ```jest-environment-jsdom``` is not really a browser. 

So we mock out fetch, with data called greg, sampled from git hub https://api.github.com/search/users?q=greg . 

First install the fetch mock package with npm:
```npm i -D jest-fetch-mock```
Then include and use it.
```
    import fetchMock from "jest-fetch-mock";
...
    it("renders the page", async () => {
      const greg = {  // sampled from "https://api.github.com/search/users?q=greg";
    
            "total_count": 51587,
            "incomplete_results": false,
            "items": [...] } 

        (JSON.stringify(greg)).
        const jsx = await GitHubUsers();
        render(jsx) ;
     
        expect(screen.getByRole("heading").textContent).toContain("GitHub Users Page");
    })
```
And, lo! It works. For details, see my teacher's [nextJS 13 essay](https://www.marcusoft.net/2022/11/nextjs-testing-async-react-components.html)


