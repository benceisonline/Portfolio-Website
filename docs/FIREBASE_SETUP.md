## Setup Firebase

### Initial Setup

1. Create a Firebase project
2. Run the following commands:

```bash
npm install -g firebase-tools
firebase login
firebase experiments:enable webframeworks
firebase init hosting  # Only first time
npm run build
firebase deploy
```

### Documentation

- [Integrate Next.js with Firebase](https://firebase.google.com/docs/hosting/frameworks/nextjs)
- [How to Deploy Next.js Frontend](https://javascript.plainenglish.io/how-to-deploy-a-nextjs-website-33b65765d54d)

### Troubleshooting Image Issues

If you encounter image optimization issues, ensure `next.config.js` has:

```javascript
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = nextConfig;
```
