# How to Add Your Profile Image

## Quick Steps:

1. **Save your image file** with the name: `profile.jpg`
   - Acceptable formats: `.jpg`, `.jpeg`, or `.png`

2. **Copy the image file** to the `public` folder:
   - Location: `D:\GitHub\Self\MyPortfolio\Portfolio-Website\public\profile.jpg`

3. **Restart your development server**:
   ```bash
   # Stop the current server (Ctrl+C)
   npm start
   ```

4. **Clear browser cache** (if needed):
   - Press `Ctrl+Shift+R` to hard refresh

## File Location:
```
Portfolio-Website/
└── public/
    └── profile.jpg  ← Your image goes here
```

## Alternative Names:
If you want to use a different filename, the code will also check for:
- `profile.png`
- `akila.jpg`

But `profile.jpg` is the preferred name.

## Troubleshooting:
- Make sure the file is in the `public` folder, NOT the `src` folder
- File name should be exactly `profile.jpg` (case-sensitive)
- After adding the file, restart the dev server

