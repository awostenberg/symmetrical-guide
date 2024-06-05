ch12-repos-component

"create a component that retrieves and lists user's repositories"

"In our 'app' directory, we'll create a new component's folder.." - lim

How'd apply I in ZOMBIE and program to the interface. But first, maybe write this, grab a snapshot of output [api.github.com/users/greg](https://api.github.com/users/greg), then redo tdd.


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

I want to program to an interface... and that component will implement the interface, so will my hardcoded one (the one greg)... Things I don't understand
1. typescript interface
2. how to injectt into nextJS

(this may not be necessary, for I know with fetch mock from a previous chapter how to write it for real)


Ok mabye table interface, fetch is working nicely, test will be adjacent to cut,

I need that file for even the todo, so
```bash
 mkdir src/app/components
 touch src/app/components/repos.spec.tsx
```

Or I could write it hardcoded by-the-lim-book, get test to pass, and take it as a refactoring to pull out the fetch mock..