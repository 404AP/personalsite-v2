# AlvanPrice.com

Personal website for Alvan Price, focused on technology operations, infrastructure, systems integration, and hands-on technical problem solving.

## DigitalOcean App Platform

Create a **Static Site** component from this repository with:

- Branch: `master`
- Build command: `npm run build`
- Output directory: `dist`

The build has no runtime dependencies or environment variables.

After the first successful deployment, add `alvanprice.com` and `www.alvanprice.com` in DigitalOcean, then use the DNS records DigitalOcean provides. Redirect `www` to the root domain.

## Local preview

```sh
npm run build
npm start
```

Open `http://localhost:4173`.
