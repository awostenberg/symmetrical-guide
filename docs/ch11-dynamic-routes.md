
# dynamic routes and param props

## loc.760 UserRepos takes props
Doing this bottom up (detroit school TDD) because I don't know how to click the link or mock called component to drive it top-down (london school). 

By end of chapter I will know a little better, at least enough to check for existence of the link. But I think a bottom-up capstone approach is still in order so the link never leads to a bad page. This is different than Lim's top-down order.

Putting this spec in same folder as page under test.
```bash
mkdir src/app/githubusers/\[user\]
touch src/app/githubusers/\[user\]/userrepo.spec.tsx
```

passing the props

```tsx
    it('renders the page', () => {
        const u = {'user':'greg'}
        render(<UserRepos params={u} />)

        expect(screen.getByRole('heading').textContent).toContain('User greg Repo Page')

    })
```

## loc.707 true links


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

### sapiential test
Jest did not click the link. Visit the page and try it out. Should pass. (Earlier I found a mistake in the path to ```[user]``` but this is corrected in instructions)

