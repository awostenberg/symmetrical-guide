
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

## loc.707 true links

### directory mistake
sapiential testing reveals a directory structure mistake. ```[users]``` belongs in ```src/app/githubusers/```. To correct
```bash
git mv src/app/\[user\] src/app/githubusers/\[user\]    
```
(or correct these chapter instructions)

### improve link test
```typescript
 const links = screen.getAllByRole("link").map(item => item.textContent);
        expect(links).toContain("Go to Repos");
      
```
### make it pass 
with loc.737 corrections to ```githubusers/[user]page.tsx```

```tsx
    <td>
        <Link href={`githubusers/${user.login}`} className="btn btn-link">
        Go to Repos
        </Link>
    </td>
    
```

