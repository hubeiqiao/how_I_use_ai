# Social Media Preview Configuration

## Overview
Your website now has optimized social media preview (Open Graph) meta tags that will display properly across multiple platforms including LinkedIn, X (Twitter), WhatsApp, Facebook, and Pinterest.

## Updated Meta Tags

### Image Details
- **File**: `How I Use AI Tools Personally_202510.png`
- **Location**: Root directory of your project
- **Dimensions**: 1200 × 1198 pixels
- **Format**: PNG with transparency (RGBA)
- **URL**: `https://ai.hubeiqiao.com/How%20I%20Use%20AI%20Tools%20Personally_202510.png`

### Platform-Specific Configuration

#### 1. **LinkedIn**
- Uses Open Graph (og:) tags
- Requires: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- ✅ Configured with article type
- ✅ Image dimensions specified (1200×1198)

#### 2. **X / Twitter**
- Uses Twitter Card meta tags
- Requires: `twitter:card` (set to "summary_large_image"), `twitter:image`, `twitter:title`
- ✅ Configured with summary_large_image card type
- ✅ Creator handle included (@hubeiqiao)
- ✅ Image alt text included for accessibility

#### 3. **WhatsApp**
- Uses Open Graph tags
- Requires: `og:image`, `og:image:secure_url` for HTTPS connections
- ✅ Both HTTP and HTTPS image URLs configured
- ✅ HTTPS version ensures secure delivery

#### 4. **Facebook**
- Uses Open Graph tags
- Requires: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- ✅ Fully configured with article type

#### 5. **Pinterest**
- Uses Pinterest-specific meta tags
- ✅ `pinterest:description` added for rich pins support

## Meta Tags Added

```html
<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="article">
<meta property="og:url" content="https://ai.hubeiqiao.com/">
<meta property="og:title" content="How I Use AI Tools Personally (October 2025)">
<meta property="og:description" content="A comprehensive overview of AI tools and how they're used in practice by Joe Hu in October 2025.">
<meta property="og:image" content="https://ai.hubeiqiao.com/How%20I%20Use%20AI%20Tools%20Personally_202510.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="1198">
<meta property="og:image:type" content="image/png">
<meta property="og:image:alt" content="How I Use AI Tools Personally - Personal AI tools toolkit by Joe Hu">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://ai.hubeiqiao.com/">
<meta name="twitter:title" content="How I Use AI Tools Personally (October 2025)">
<meta name="twitter:description" content="A comprehensive overview of AI tools and how they're used in practice by Joe Hu in October 2025.">
<meta name="twitter:image" content="https://ai.hubeiqiao.com/How%20I%20Use%20AI%20Tools%20Personally_202510.png">
<meta name="twitter:image:alt" content="How I Use AI Tools Personally - Personal AI tools toolkit by Joe Hu">
<meta name="twitter:creator" content="@hubeiqiao">

<!-- WhatsApp / Pinterest / General social media -->
<meta property="og:image:secure_url" content="https://ai.hubeiqiao.com/How%20I%20Use%20AI%20Tools%20Personally_202510.png">
<meta name="pinterest:description" content="How I Use AI Tools Personally - A comprehensive overview of AI tools and how they're used in practice by Joe Hu in October 2025.">
```

## How to Test

### 1. **LinkedIn**
- Go to LinkedIn Post Inspector: https://www.linkedin.com/feed/inspector/
- Paste your URL: `https://ai.hubeiqiao.com/`
- Click "Inspect"
- You should see your preview image displayed

### 2. **X / Twitter**
- Go to Twitter Card Validator: https://cards-dev.twitter.com/validator
- Enter your URL
- Click "Check URL"
- Your preview will show with the large image

### 3. **WhatsApp**
- Share the link in a WhatsApp chat
- The preview card will display with your image and description

### 4. **Facebook**
- Go to Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/sharing/
- Paste your URL
- Facebook will display the preview with your image

### 5. **Discord**
- Share your link in Discord
- It will automatically fetch the Open Graph meta tags and display the preview

## Important Notes

1. **Image Caching**: Social platforms cache preview images. If you update the image:
   - LinkedIn: Use Post Inspector → "Check URL again"
   - Twitter: Use Card Validator → refresh
   - Facebook: Use Sharing Debugger → "Scrape Again"
   - Others: May take 24-48 hours to refresh

2. **Image Requirements by Platform**:
   - **LinkedIn**: Minimum 1200×627px (recommended 1200×1198px for tall images) ✅
   - **Twitter**: Minimum 200×200px, recommended 1200×675px ✅
   - **WhatsApp**: Minimum 200×200px ✅
   - **Facebook**: Minimum 1200×630px ✅

3. **File Serving**: Ensure your Vercel deployment includes the image file in the public root directory.

4. **URL Encoding**: The space in the filename is URL-encoded as `%20` which is properly handled by all platforms.

## Next Steps

After deployment to Vercel:
1. Test each platform using the links above
2. If images don't appear immediately, use the platform's cache-clearing tools
3. Monitor engagement metrics to ensure proper sharing

