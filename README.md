# Flight Deck Strategic Solutions Website

A complete Next.js website with Decap CMS content management and Cloudflare Pages deployment. This is a fully functional business consulting website that demonstrates the integration of modern web technologies with a user-friendly content management system.

## 🚀 Features

- **Next.js 15** with TypeScript and Tailwind CSS
- **Decap CMS** for content management with GitHub backend
- **Cloudflare Pages** deployment with OAuth proxy
- **Responsive design** optimized for all devices
- **SEO optimized** with proper meta tags and structure
- **Real content** including pages, services, blog posts, team members, and testimonials
- **Content-driven** architecture where all content is manageable via CMS

## 📁 Project Structure

```
flightdeckstrategicsolutions/
├── app/                          # Next.js app directory
│   ├── components/              # React components
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── services/                # Services page
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── content/                     # CMS content files
│   ├── pages/                   # Website pages
│   ├── blog/                    # Blog posts
│   ├── services/                # Service offerings
│   ├── team/                    # Team members
│   ├── testimonials/            # Client testimonials
│   ├── settings/                # Site settings
│   └── navigation/              # Navigation menus
├── decap-proxy/                 # Cloudflare Worker for OAuth
│   ├── src/
│   │   ├── index.ts             # Worker main file
│   │   └── oauth.ts             # OAuth client
│   ├── package.json
│   ├── wrangler.toml
│   └── tsconfig.json
├── public/
│   ├── admin/
│   │   └── index.html           # CMS admin interface
│   ├── config.yml               # CMS configuration
│   └── _headers                 # Cloudflare headers
├── src/
│   └── lib/
│       └── content.ts           # Content utilities
└── package.json
```

## 🛠️ Setup Instructions

### 1. GitHub Repository Setup

1. Create a new GitHub repository
2. Make the repository **public** (required for Decap CMS with this configuration)
3. Push this code to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

### 2. GitHub OAuth App Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: Flight Deck CMS
   - **Homepage URL**: `https://your-domain.com`
   - **Authorization callback URL**: `https://decap-proxy-flightdeck.yourusername.workers.dev/callback`
4. Click "Register application"
5. Copy the **Client ID**
6. Generate and copy the **Client Secret** (save it immediately!)

### 3. Cloudflare Worker Deployment

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Navigate to the worker directory:
   ```bash
   cd decap-proxy
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Deploy the worker:
   ```bash
   npx wrangler deploy
   ```

5. Set environment variables via Cloudflare Dashboard:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages**
   - Click on your worker (e.g., "decap-proxy-flightdeck")
   - Go to **Settings** tab
   - Add environment variables:
     - `OAUTH_CLIENT_ID`: Your GitHub OAuth Client ID
     - `OAUTH_CLIENT_SECRET`: Your GitHub OAuth Client Secret (as a secret)

### 4. Update Configuration Files

Update the following files with your actual information:

#### `public/config.yml`
```yaml
backend:
  name: github
  repo: yourusername/your-repo-name    # UPDATE THIS
  branch: main
  base_url: https://decap-proxy-flightdeck.yourusername.workers.dev  # UPDATE THIS
  auth_endpoint: /auth

site_url: "https://your-domain.com"      # UPDATE THIS
display_url: "https://your-domain.com"  # UPDATE THIS
```

#### `decap-proxy/wrangler.toml`
```toml
name = "decap-proxy-flightdeck-yourusername"  # UPDATE THIS
```

### 5. Cloudflare Pages Deployment

1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `.next`
   - **Node.js version**: `18.x` or higher

3. Deploy the site

### 6. Testing the Setup

1. **Worker Test**: Visit `https://your-worker-url.workers.dev` - should show "Decap OAuth Proxy"

2. **CMS Access**: Visit `https://your-domain.com/admin/`
   - Click "Login with GitHub"
   - Authorize the application
   - You should see the CMS interface with your content collections

3. **Content Editing**: 
   - Create or edit content in the CMS
   - Check that changes are committed to your GitHub repository
   - Verify that changes appear on your live website

## 🎨 Customization

### Content Management

All content is managed through the CMS at `/admin/`. You can:

- **Edit pages**: Homepage, About, Contact, and custom pages
- **Manage services**: Add/edit service offerings
- **Create blog posts**: Write and publish articles
- **Update team members**: Add team member profiles
- **Collect testimonials**: Showcase client feedback
- **Configure settings**: Site title, contact info, social links
- **Manage navigation**: Header and footer menus

### Design Customization

The site uses Tailwind CSS for styling. Key areas to customize:

- **Colors**: Update the blue color scheme in component files
- **Typography**: Modify font choices in `app/layout.tsx`
- **Layout**: Adjust component structures in `app/components/`
- **Icons**: FontAwesome icons are used throughout

### Adding New Content Types

To add new content collections:

1. Add collection configuration to `public/config.yml`
2. Create content directory in `content/`
3. Add TypeScript interfaces in `src/lib/content.ts`
4. Create content retrieval functions
5. Build components to display the content

## 🔧 Development

### Local Development

```bash
npm install
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

### Worker Development

```bash
cd decap-proxy
npm run dev
```

## 📝 Content Collections

The CMS includes these pre-configured collections:

- **Pages**: Static pages (Home, About, Contact)
- **Blog Posts**: Articles with categories and tags
- **Services**: Service offerings with features and pricing
- **Team Members**: Staff profiles with photos and bios
- **Testimonials**: Client feedback with ratings
- **Settings**: Site configuration and contact info
- **Navigation**: Header and footer menus

## 🚨 Troubleshooting

### Common Issues

**"Failed to load config.yml"**
- Ensure `config.yml` is in `/public/`, not `/public/admin/`

**"Repo not found"**
- Check repository name in `config.yml`
- Ensure repository is public
- Verify you're logged into the correct GitHub account

**OAuth authentication fails**
- Verify environment variables are set in Cloudflare Dashboard
- Check that callback URL matches in GitHub OAuth app
- Clear browser cache and cookies

**"Missing OAUTH_CLIENT_ID"**
- Set environment variables via Cloudflare Dashboard (not CLI)
- Redeploy worker after setting variables

### Getting Help

If you encounter issues:

1. Check the browser console for JavaScript errors
2. Verify all URLs in configuration files are correct
3. Ensure environment variables are properly set
4. Test each component (worker, OAuth, CMS) individually

## 🔐 Security Notes

- Repository must be public for this Decap CMS configuration
- OAuth secrets are properly encrypted in Cloudflare Workers
- CMS access is controlled via GitHub authentication
- All content changes are version controlled in Git

## 📄 License

This project is created as a demonstration of Next.js + Decap CMS integration. Feel free to use it as a starting point for your own projects.

---

**Ready to launch your strategic consulting website?** Follow the setup instructions above and you'll have a fully functional, content-manageable website deployed and ready for customization!