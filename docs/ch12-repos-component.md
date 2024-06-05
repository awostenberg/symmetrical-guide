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

But first, maybe write this, grab a snapshot of output [api.github.com/users/greg](https://api.github.com/users/greg), then redo tdd?

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

