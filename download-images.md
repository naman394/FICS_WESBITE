# How to Download ChatGPT Images

The ChatGPT URLs require authentication and cannot be accessed directly from your website. You need to download the images manually.

## Quick Steps:

1. **Open each URL in your browser** (while logged into ChatGPT):
   - https://chatgpt.com/backend-api/estuary/content?id=file_000000002f4c7209b8321f759d583fb8&ts=490093&p=fs&cid=1&sig=babbbffa2d6fdf30cc7ec885dc37d7d048672ffa44a8f6827fdaca3b5033323d&v=0
   - https://chatgpt.com/backend-api/estuary/content?id=file_00000000c9b87207a8399e0cad2b7382&ts=490093&p=fs&cid=1&sig=6168b7bfc67173ebad37647fb571e227b7ba612d70c7ff7cab05873e0686afa4&v=0
   - https://chatgpt.com/backend-api/estuary/content?id=file_00000000e5e07209807fac0dc2cb99fb&ts=490093&p=fs&cid=1&sig=42e9b9b49872776aaeb102907deb836f0319e1df304bce2a6428f91b3fe8aed8&v=0
   - https://chatgpt.com/backend-api/estuary/content?id=file_00000000fbbc7207ab9d281748da94d9&ts=490094&p=fs&cid=1&sig=3e6b38ed043d4d74e014c4412eba780fa56be6de48d6645640c362ce42e4233b&v=0
   - https://chatgpt.com/backend-api/estuary/content?id=file_000000003b047207952bb95498ad3d9e&ts=490094&p=fs&cid=1&sig=1d4a2a0ef30f64c43905979ac118b3cffccdc9e9c4eb5f63b51db38ec4c54579&v=0

2. **Right-click each image** and select "Save Image As..."

3. **Save them to** `public/images/` folder with these exact names:
   - `image1.jpg` (or .png/.webp - whatever format they are)
   - `image2.jpg`
   - `image3.jpg`
   - `image4.jpg`
   - `image5.jpg`

4. **Restart your dev server** if it's running

## Alternative: Use a Public Image Hosting Service

If you prefer, you can:
1. Upload the images to Imgur, Cloudinary, or another image hosting service
2. Get the public URLs
3. Update the URLs in `components/FeatureScroll.tsx`

