# GitHub Pages Deployment Guide

## Step-by-Step Deployment Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `touch-panel-switch-board` (or your preferred name)
   - **Description**: "Interactive 3D product showcase for Touch Panel Switch Board"
   - **Visibility**: Public (required for free GitHub Pages)
   - ✅ Initialize with README: **No** (we already have one)
5. Click "Create repository"

### 2. Push Your Code to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Touch Panel Switch Board showcase"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote
# Replace <USERNAME> and <REPOSITORY> with your values
git remote add origin https://github.com/<USERNAME>/<REPOSITORY>.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/yourcompany/touch-panel-switch-board.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. The GitHub Actions workflow will automatically trigger

### 4. Monitor Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the deployment progress
4. Wait for both "build" and "deploy" jobs to complete (usually 2-3 minutes)

### 5. Access Your Live Site

Once deployment is complete:

Your site will be available at:
```
https://<USERNAME>.github.io/<REPOSITORY>/
```

**Example:**
```
https://yourcompany.github.io/touch-panel-switch-board/
```

## Automatic Updates

After initial setup, any changes you push to the `main` branch will automatically trigger a new deployment:

```bash
# Make your changes, then:
git add .
git commit -m "Update product specifications"
git push
```

The site will automatically rebuild and redeploy in 2-3 minutes.

## Troubleshooting

### Issue: 404 Page Not Found

**Solution 1**: Check GitHub Pages settings
- Go to Settings > Pages
- Ensure source is set to "GitHub Actions"

**Solution 2**: Wait a few minutes
- First deployment can take 5-10 minutes

### Issue: Build Failed in Actions

**Solution**: Check the Actions tab for error details
- Go to Actions tab
- Click on the failed workflow
- Review the error logs
- Common fixes:
  - Ensure all dependencies are in package.json
  - Check for syntax errors in code
  - Verify all file paths are correct

### Issue: 3D Model Not Loading

**Solution**: Check file paths
- Ensure all files in `public` folder are committed
- Verify OBJ file is not too large (GitHub has 100MB limit)
- Check browser console for errors

### Issue: Images Not Displaying

**Solution**: Check relative paths
- All paths should start with `/` (e.g., `/image.png`)
- Verify images are in the `public` folder
- Ensure image files are committed to git

## Custom Domain (Optional)

To use your own domain:

1. Go to Settings > Pages
2. Under "Custom domain", enter your domain
3. Follow GitHub's instructions for DNS configuration
4. Add a CNAME file to your repository:

```bash
echo "yourdomain.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push
```

## Performance Optimization

For better loading performance:

1. **Optimize 3D model**: Reduce polygon count in 3D software
2. **Compress images**: Use tools like TinyPNG
3. **Enable caching**: Already configured in the workflow

## Security Notes

- Never commit sensitive information (API keys, passwords)
- Keep dependencies updated: `npm update`
- Review security advisories: `npm audit`

## Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Check repository Issues tab for common problems

---

**Last Updated**: June 14, 2026  
**Maintained By**: [Your Company Name]
