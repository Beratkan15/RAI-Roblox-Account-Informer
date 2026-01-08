# RAI Verification Website

OAuth2 verification website for RAI (Roblox Account Informer).

## Deployment

This site is deployed on Vercel at: `https://rai-verify.vercel.app`

## OAuth2 Configuration

**Redirect URI:** `https://rai-verify.vercel.app/oauth/callback`

Add this URL to your Roblox OAuth2 application settings in the Creator Dashboard.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Pages

- `/` - Home page with download links
- `/tos` - Terms of Service
- `/pp` - Privacy Policy
- `/credits` - Credits
- `/oauth/callback` - OAuth2 callback handler

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- Three.js (Beams background)

## License

MIT
