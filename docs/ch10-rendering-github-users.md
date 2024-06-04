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
```TypeError TypeError: Cannot read properties of undefined (reading '0') ``` on npm triggered test. Wallaby now off. npm test watch seems reliable with wallaby off. 

Tentative: interaction between wallaby, async, jest-mock. I wonder if it is wallaby interrupting? some singleton? I'm typing this, no failures (but, wait, this is an .md file; does that trigger runs? Or only watch) (it does not) ... and wallaby back to it's type error (don't know what caused it... small non-consequential change to code "just a comment") and now npm test is stuck on fail as well, even when triggering? yes. even when triggering. The cure is stop wallaby.

making changes, wallaby off, npm test watch on, working fine. 

### bye bye wallaby for now
Provisional solution: don't use wallaby. Unhardwired *greg* string and slightly less hardwired users[0].login. This means can't use wallaby for now.

Possible better solution from [copilot](https://www.perplexity.ai/search/any-known-problems-ohdxlgKGQgqWEz0dnId_Vg)
"1) wrap your API calls in thin functions that you own, and mock those functions instead of mocking the global fetch directly.
2)Alternatively, you could consider using other libraries like nock  or msw (Mock Service Worker) instead of fetch-mock, as they may have better compatibility with Wallaby and Jest for mocking asynchronous network requests"


### iterating users for user name
I iterate through users in the tbody 
                    <tbody>
                        {/* row 1 */}
                        {users.map((user) => (

                            <tr >
                                <th>1</th>
                                <td>{users[0].login}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        ))}

                    </tbody>

and get about 30 of greg in jest. Puzzling. Sapiential? Same. Expected there -- I'm not using any mocks. But in jest? Am I not mocking? Hm..

I replace```<td>{users[0].login}</td>``` with  ```  <td>{user.login}</td>``` get a better jest error, "each child in a list should hvea u nique key property" and "check the top-level render call" (it's that th..don't need it

I make the change, 

                    <tbody>
                        {users.map((user) => (

                            <tr key={user.id}>
                                <td>{user.login}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        ))}

                    </tbody>

and get our old friend
```TypeError: Cannot read properties of undefined (reading 'map')```
trigger npm test, which passes.

Sapiential test passing as well. Wait, no, name is not under name headline. Remove that extra th in thead making it 3 not 4:

               <thead>
                        <tr>
    
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>

sapiential test pass.


### loc.566 avatar and it seems no mocking

passing sapiential test avatar ✅

jest test ```     expect(screen.getByRole('img'));``` 
does not pass because there are many (30).
But adjusting it, this jest passes 

```      expect(screen.getAllByRole('img').length).toBeGreaterThan(0); ```
 

I notice  here it has many rows... it is not seeming to use the mock
but real git api. Also, these tests are taking 2s to run.

### loc.566 mock on and wallaby is back

Why? Forgot [teacher said](https://www.marcusoft.net/2022/11/nextjs-testing-async-react-components.html) to enable mocks:

    import fetchMock from "jest-fetch-mock";
    fetchMock.enableMocks();


and to also avoid test interference by clearing 
    describe("github user", () => {

        beforeEach(() => {
            fetchMock.resetMocks();
        });

Wallaby is back.
