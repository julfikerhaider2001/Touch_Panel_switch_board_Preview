@echo off
echo ========================================
echo Touch Panel Switch Board - Quick Deploy
echo ========================================
echo.

echo Step 1: Building production version...
call npm run build
if errorlevel 1 (
    echo Error: Build failed!
    pause
    exit /b 1
)
echo Build completed successfully!
echo.

echo Step 2: Testing production build...
echo Opening preview in browser...
echo Press Ctrl+C to stop the preview server when ready
call npm run preview

echo.
echo ========================================
echo Deployment Checklist:
echo ========================================
echo [ ] 1. Create GitHub repository
echo [ ] 2. Run: git init
echo [ ] 3. Run: git add .
echo [ ] 4. Run: git commit -m "Initial commit"
echo [ ] 5. Run: git branch -M main
echo [ ] 6. Run: git remote add origin YOUR_REPO_URL
echo [ ] 7. Run: git push -u origin main
echo [ ] 8. Enable GitHub Pages in repository settings
echo.
echo See DEPLOYMENT_GUIDE.md for detailed instructions
echo.
pause
