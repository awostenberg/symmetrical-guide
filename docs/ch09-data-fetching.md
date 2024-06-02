

# chapter 09 data fetching

## loc 485 stubbed github users page component

"our goal is to retrieve..."


but first, we create the test ```touch \spec\githubusers.spec.tsx```


once saved you should be directed to the appropriate page..
 - worked; delightful. bottom-up. hand-check final part.

## loc 504 fetching from real github

On tdd way, this would be
- program to mock component for zero/one/many/oops
- contract integration test against real github to assure mock is faithful

marking ```it.todo```
I suspect that async gitHubUsers will require test revision... hopefully "async all the way up"

later.. that ```const GitHubUsers =  async () => {...}``` does break tests, I can't see how to fix them, the brilliant late night ```await render(...)``` did not do the trick, that test is marked ```it.skip``

## loc 536 save and see
"..saving the changes and navitate to GitHub Users in terminal server logs, you'll see all the requierd data are retrieved."

I did not, at first. Launched crome. saw it. Not on brave. Maybe caching? stopped brave, restart, see terminal log.
