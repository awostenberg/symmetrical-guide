# chapter 12 repos component

## initial test list

"create a component that retrieves and lists user's repositories"

"In our 'app' directory, we'll create a new component's folder.." - lim






First, I need that file for even the todo, make them:
```bash
 mkdir src/app/components
 touch src/app/components/repos.spec.tsx
```


Say it as a todo


```tsx


describe('repos component', () => {

    it.todo('fetches real greg (contract integration test)');
        // see https://martinfowler.com/bliki/ContractTest.html
    
    it.todo('fetches and renders zero repo');    //that /and/ is a clue -- not a single responsibility
    it.todo('fetches and renders one repo greg');
    it.todo('renders many repo greg');  
    it.todo('renders oops');  // could be no such user, or, less likely, some git problem with good user greg (outage?)
})
    
```

How to apply *i* in [ZOMBIES](https://blog.wingman-sw.com/tdd-guided-by-zombies) and program to the interface?

But first, maybe write this, grab a snapshot of output [api.github.com/users/greg](https://api.github.com/users/greg/repos), then redo tdd?

I want to program to an interface... and that component will implement the interface, so will my hardcoded one (the one greg)... Things I yet don't understand well enough to write the test:
1. typescript interface
2. how to inject into nextJS

But, wait, this interface may not be necessary just now. for I know with fetch mock from a previous chapter how to write it for real, how to mock out the fetch.



Or I could write it hardcoded by-the-lim-book, get test to pass, and take it as a refactoring to pull out the fetch mock.

## loc.783 one greg

It's going to have a table element with columns. 
I'll start with headline for greg. 

I'll start with headline
```tsx
it('fetches and renders one repo greg', () => {
        render(<Repos user='greg' />);     
    });
```

To fix compile error requires includes
```tsx
import { render, screen } from "@testing-library/react";
import Repos from './repos';
```

and the cut file
```bash 
touch src/app/components/repos.tsx   
```

and it's code
```tsx
const Repos = ({user}) => {
    return(<div></div>)
}

export default Repos
```

It now compiles. Let's write that assert for the  to cause is to render greg's name
Here I'm drifting a little bit from teacher Lim, who did not have greg's name in headline. 

```tsx
 expect(screen.getByRole('heading').textContent).toContain('Repos for greg')
```

And watch the test fail for the right reason "unable to find an accessable role 'heading'..."

We can control the tdd step size by writing just the h1 into ```repos.tsx```

```tsx
 return(<div><h1></h1></div>)
```

And should now see the new test failure *Expected substring: "Repos for greg" Received string:    ""*

code up ```repos.tsx```
```tsx
        <div>
            <h1>Repos for {user}</h1>
        </div>)
```

And watch it pass. 

But does it pass *all* the tests -- even compiler warnings? No. Notice the compiler red squiggly warning over user in the ```repos.txt``? It says "binding element _user_ implicitly has an 'any' type. I don't know how to fix that today, and neither does [copilot](https://www.perplexity.ai/search/in-typescript-destructuring-B9g01i56SIGm4gwsu2.dEg)

Commit unit with F1 notation. "many more smaller steps" as [Geepaw](https://www.geepawhill.org/series/many-more-much-smaller-steps/) says.

## one greg fetched

"we should see the users repositories logged in the console" - Lim

Noice that ```repos.tsx``` does not return repositories. Here Lim has us write the fetch, log to console, and inspect that for expectation.   Reading ahead I see he's going to have us revise ```repos.tsx``` to render a table of the ```resp.name``` and ```repo.description```. There is the fetch, and render (it's in the test name fetch and render) ... and it would be good to separate the two. Maybe I'll make that a refactor.


This console.log is scaffolding. How do it the TDD way? What's the simplest thing that could possibly work?





Well I could assert a known word is somewhere in the text. And have ```repos.tsx``` return raw json in the headline or near. This would cause me to get the fetch mock right. And then I could 

a) write another test to check for rendering as a table 
b) revise this test to check for rendering as a table
c) take it as a refactoring to render it as a table -- do this from a green test.

I see (a) is the simplest thing that could work right now with what I know. Let's do that.

### loc.783 json sampler to drive this out
first sample file
```bash
touch src/app/components/greg.sample.json 
```

populate that with the first item in https://api.github.com/users/greg/repos
```json
[
  {
    "id": 169835898,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNjk4MzU4OTg=",
    "name": "CodableInterception",
    ...
  }
```


```tsx
import greg from './greg.spec.sample.json'; // sampled from https://api.github.com/users/greg/repos
```


Oh, wait, I realized I forgot to plumb this out to the navigation page so I could (loc.809)...
```tsx
import Repos from "../../components/Repos";

```

Retrace steps.. plumb that out? Lim's "testing oru app" and "we shoudl see the user's repositories" is from the UI (which needs to be plumbed) and not from here... But I'm writing these low level lines for ```fetchRepos``` "the tdd way", so have yet to write them... .. return to regular program.. that code 


Ok and now I see that what Lim called the component -- the thing I jsut wrote called ... does /not/ return jsx, but json. ```fetchRepos```. and that is why it's over there in components. It does not write the div stuff, the jsx. Backtrack to fix that.  But on loc.783 he calls it ```Repos.jsx``` 

I shall need to backtrack a little.  This at least settles the fetch and render separation of concerns question. I misread teacher Lim. Nothing wasted. This shall be a refactor.  Start with the test? (We're art a green state)

### loc.783 json fetch mock again
I note it passes in wallaby but not command line which gives 
the error *fetch is not defined *

 This is an async not answering a jsx. Also I'm using fake bob https://api.github.com/users/bob/repos and it passes. (a missing semicolin fixed npm run dev; npm test still failing; Wallaby is more forgiving)

```ts
    app/components/repos.tsx:14
        const res = await fetch(`https://api.github.com/users/${user}/repos`);
                    ^

    ReferenceError: fetch is not defined
```

#### why command line fails fetch?
and this error is now coming from githubuser.spec.tsx as well


this was caused by the ```githubusers[user]page.tsx``` importing ```component/repos```. Revert that and all tests pass from jest command line. Bisect. It was this line:
```tsx
    const result =  Repos({user:user});
```
That needs to be an await. Note that typing the result would have caused a compiler warning instead of this runtime error with *fetch not implemented* 
```tsx
   const result:[any] = Repos({user:user});
```

