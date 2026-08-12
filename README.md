# Luna & Milk — S3 static website 
Learning devSecOps practices

This is a complete static one-page ice cream shop website with four separate flavor detail pages. It uses only HTML, CSS, JavaScript, and local SVG artwork—no backend and no build step.

## Files

- `index.html` — homepage
- `vanilla-bean.html`, `berry-hibiscus.html`, `pistachio-honey.html`, `salted-caramel.html` — flavor landing pages
- `styles.css` — responsive styling and visual system
- `script.js` — mobile navigation, year stamp, and static CTA toast
- `assets/` — local flavor illustrations plus real ice-cream food photographs

## Upload to Amazon S3

1. Create an S3 bucket with a globally unique name.
2. Turn off “Block all public access” only if you intend to use the S3 website endpoint directly, and acknowledge the warning.
3. Enable **Static website hosting** in the bucket Properties. Set the index document to `index.html`.
4. Upload the contents of this folder, including the `assets` directory. Upload the folder contents—not the outer ZIP file—as the site root.
5. Add a bucket policy that grants `s3:GetObject` to the public principal if you are using the public S3 website endpoint.
6. Open the generated S3 website endpoint. For a production site, put CloudFront in front of the bucket and use HTTPS.

The email address uses the placeholder domain `lunaandmilk.example`. Replace it in the HTML files with your real shop email before launch.

The photo files are local copies of Unsplash food photography for this demo, so the site still works when uploaded to S3 without depending on a remote image CDN. Review the Unsplash license/credit requirements and replace the photos with your own licensed product photography before a commercial launch.
