# Responsive Homepage with Video Background

A React-based responsive homepage featuring a full-screen video background that automatically adjusts for both mobile and desktop sizes.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Auto-playing video background with fallback options
- ✅ Smooth animations and transitions
- ✅ Optimized for different screen orientations
- ✅ Performance optimizations for mobile devices
- ✅ Accessibility considerations

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your video files:**
   - Place your background video in `public/videos/`
   - Name it `background-video.mp4` (and optionally `background-video.webm` for better browser support)
   - For best results, use a video that's at least 1920x1080 resolution

3. **Add fallback image (optional):**
   - Place a fallback image in `public/images/`
   - Name it `fallback-bg.jpg`
   - This will be used on very small mobile screens for better performance

4. **Start the development server:**
   ```bash
   npm start
   ```

## Video Requirements

- **Format:** MP4 (required), WebM (optional but recommended)
- **Resolution:** Minimum 1920x1080, 4K recommended for best quality
- **Duration:** Any length (video will loop automatically)
- **Size:** Keep under 50MB for better loading performance
- **Aspect Ratio:** 16:9 recommended

## Customization

### Updating Content
Edit the heading and caption in `src/components/HomePage.js`:
```javascript
<h1 className="hero-title">Your Custom Heading</h1>
<p className="hero-caption">Your custom caption text here</p>
```

### Styling
- Main styles: `src/components/HomePage.css`
- Video background styles: `src/components/VideoBackground.css`

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- Video autoplay is muted by default (required by most browsers)
- On very small screens (< 480px), a static image fallback is used
- Video is optimized with `object-fit: cover` for proper scaling
- Lazy loading and performance optimizations included
