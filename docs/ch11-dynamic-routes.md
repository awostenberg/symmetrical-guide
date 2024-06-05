
# dynamic routes and param props

## loc.760 UserRepos takes props
Doing this bottom up (detroit school) because I don't know how to click the link to drive it top-down (london school)

Putting this spec in same folder as page under test.
```bash
mkdir src/app/\[user\]
touch src/app/\[user\]/userrepo.spec.tsx
```

passing the props

```
    it('renders the page', () => {
        const u = {'user':'greg'}
        render(<UserRepos params={u} />)

        expect(screen.getByRole('heading').textContent).toContain('User greg Repo Page')

    })
```

## true links

sapiential testing reveals an directory structure mistake. ```[users]``` belongs in ```src/app/githubusers/``` To correct
```bash
git mv src/app/\[user\] src/app/githubusers/\[user\]    
```
