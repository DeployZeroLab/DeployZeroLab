# DeployZeroLab - Next.js Site

AI & Deep Learning Deployment Solutions - From Zero to Production in Minutes

## Development

```bash
npm install
npm run dev
```

## GitHub Pages Deployment

1. Build the static site:
```bash
npm run build
```

2. The static files will be in the `out` directory

3. Go to your GitHub repository settings > Pages
4. Set source to "Deploy from a branch"
5. Select the `gh-pages` branch (you'll need to create this)

## Manual Deployment to gh-pages

```bash
# Build the site
npm run build

# Create and switch to gh-pages branch
git checkout --orphan gh-pages

# Remove all files except out directory
git rm -rf .
cp -r out/* .
rm -rf out

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Switch back to main branch
git checkout master
```

Your site will be available at: `https://[username].github.io/DeployZeroLab/`
