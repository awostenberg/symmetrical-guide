ch10-rendering github users
# chapter 10: rendering GitHub users

## loc 650

"Let's examine how to render and outupt the fetched users..." -Lim

As always, let's write the initial test list first. A few ```it.todo()`` suffice
``` describe("githubusers")
    it.todo("renders github user profile picture")
    it.todo("renders name")
    it.todo("renders GitHub URL")
    it.todo("renders repository") // not sure how this differes

    it.todo("renders using DaisyUI table component")


```

I realixze I did not pull out ```items``` from the fetched github data, backtrack to chapter 9. don't know how to do this, so ```it.todo('fetches only items')```

getting a jsx not an items list; wonder why given ```fetchGitHubUsers()``` returns a promise.

I notice in Wallaby a white box - line not covered in page.tsx
    const users = await fetchGitHubUsers();
and yellow on last line
    export default GitHubUsers

was it console.log? the refactoring of async functino fetchGetHubUsers to const f = async()...?? the two imports in test?  I revert page.tsx const to async function, comment 2nd import, no joy, exit and  wallaby, green box, no yellow caution

mabye it's the double export... the combo of export default and another that is imported?
let's remove that ```export default GitHubUsers``` (working from green state) and.. I get the error "not a module"

I read "is supported, most style guides and experts recommend favoring named exports for better maintainability and tooling support" ... but do not see how to do this.

ok the ```export const GitHubUsers =  async () => {...}```  meant I did not need ```export default GitHubUsers``` and tests pass, but now, sapiential test (aka end to end) shows an error "the default export is not a React component in page: "/githubusers", which is true, so I attempt to make it so with ```export default const GitHubUsers = ...``` but get a typescript error and fail to compile. So table this. Leaving this as a skip and returning to sapiential test

```
   it.skip('fetches only github items', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(greg));
        

        const items = await fetchGitHubUsers(); 
        //wait, items is a JSX.Element?

        expect(items).toHaveLength(1)
    })
```

## loc 550 return to Daisy

having noted ```it.todo()```, return to sapiential testing with Lim.  Maybe after put back in some trivial test, that checkbox label looks promising ... it has some headlines ("name", "job"...) look proomising for expects. aha here at loc.569 Lim has us giving headers.. Name; URL; Repos;


"Copy the Table component markup for DaisyUI".. -Lim.  

Minimal for this? assert it contains..Name anywhere in there
pass.

But //fails sapiential testing .. I am not seeing that table in brave; firefox? I do. Now, I seeit ugly, in brave. Refresh. See it prettier, in brave.

## loc.566 render greg

Hardcoded from daisy, tr row 1 to be hardcoded greg, pass, change to be

```               <tr>
                            <th>1</th>
                            <td>grr {users[0].login} ggg</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
```

While I get a jest test error ("...") it does pass sapiential testing.

This tells me the jest mocks are a little off.

To test that hypothesis, let us put const greg in the page.tsx ..

```
    const fetchGitHubUsers = async () => {
        const res = await fetch("https://api.github.com/search/users?q=greg");
        const json = await res.json();  //why two awaits? Isn't one enough?
        //return json.items;

        return greg.items;
        
    };
```

pass jest.
I wonder: why two awaits? Remove second, different error. Back to main.

Is it stringify? I suspect that. Return to it tomorrow.
but wait. I notice an npm test works. Not so wallaby. Both are jest. This suggests wallaby interaction. And as I type this, wallably jest is failing. 

and now, wallaby off, ```npm test -- --watchAll```, I make these changes, and npm test begins to fail. 

I trigger a test run, npm test passing. Not sure what to make of this. 

Tentative: watching tests seems fragileseems fragile with the mocks.
changing this, watching wallaby.. and getting the 
```TypeError TypeError: Cannot read properties of undefined (reading ```'0') on npm triggered test. Wallaby now off. npm test watch seems reliable with wallaby off. 

Tentative: interaction between wallaby, async, jest-mock. I wonder if it is wallaby interrupting? some singleton? I'm typing this, no failures (but, wait, this is an .md file; does that trigger runs? Or only watch) (it does not) ... and wallaby back to it's type error (don't know what caused it... small non-consequential change to code "just a comment") and now npm test is stuck on fail as well, even when triggering? yes. even when triggering. The cure is stop wallaby.

making changes, wallaby off, npm test watch on, working fine. 

Tentative solution: don't use wallaby. 




