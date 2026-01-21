# 🎨 Social Link Aggregator

A premium, Apple-inspired reading app for curating Facebook public posts. Features elegant glassmorphism design, fluid animations, and an exclusive feel.

## ✨ Design Features

- **🪟 Glassmorphism UI**: Frosted glass cards with backdrop blur and layered depth
- **🎨 Apple-like Aesthetic**: Inspired by iOS design with SF Pro typography and fluid motion
- **🌊 Smooth Animations**: iOS-style easing curves and gentle press effects
- **🎯 Mobile-First**: Optimized for touch with safe area support
- **💎 Premium Feel**: Gradient accents, soft shadows, and breathable spacing
- **📖 Reading-Focused**: Clean, distraction-free interface

## 🚀 Features

- **Public Feed**: Display curated Facebook posts as elegant glass cards
- **Save Posts**: Bookmark your favorite posts for later reading
- **Admin Panel**: Manage posts with a simple dashboard
- **Manual Image Upload**: Upload custom thumbnail images for each post
- **No External Dependencies**: No Facebook API, no scraping, no embeds
- **Simple Authentication**: Environment-based admin access

## 🎨 Design System

This app uses a custom Apple-inspired glassmorphism design system:

- **Color Palette**: Gradient crimson accent with soft neutrals
- **Typography**: SF Pro-inspired font stack with precise hierarchy
- **Motion**: iOS-style easing (`cubic-bezier(0.4, 0, 0.2, 1)`)
- **Glass Effects**: Frosted surfaces with 20px backdrop blur
- **Shadows**: Soft, diffused shadows for depth
- **Border Radius**: Large corner radii (16-24px)

👉 See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete design documentation.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: SQLite (via Prisma ORM)
- **Styling**: Tailwind CSS with custom design tokens
- **Language**: TypeScript
- **Design**: Apple Human Interface Guidelines inspired

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="file:./dev.db"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="changeme123"
```

**Important**: Change the default password before deploying to production!

### 3. Initialize Database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the public feed.

## Usage

### Admin Access

1. Navigate to `/admin/login`
2. Enter credentials (default: `admin` / `changeme123`)
3. Manage posts from the dashboard

### Adding a Post

1. Log in to the admin panel
2. Click "Add New Post"
3. Fill in:
   - Facebook Post URL (required)
   - Title (optional)
   - Description (optional)
   - Thumbnail Image (required, max 2MB)
4. Click "Create Post"

### Managing Posts

- **Toggle Visibility**: Click "Active" / "Inactive" button
- **Delete Post**: Click "Delete" button (requires confirmation)

## Project Structure

```
my-next-app/
├── app/
│   ├── admin/          # Admin dashboard and login
│   ├── api/            # API routes for auth and posts
│   ├── page.tsx        # Public feed page
│   └── layout.tsx      # Root layout
├── components/
│   └── AdminDashboard.tsx
├── lib/
│   ├── auth.ts         # Authentication helpers
│   └── prisma.ts       # Prisma client
├── prisma/
│   └── schema.prisma   # Database schema
└── public/
    └── uploads/        # Uploaded images storage
```

## API Routes

### Authentication

- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout

### Posts

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post (admin only)
- `DELETE /api/posts/[id]` - Delete post (admin only)
- `PATCH /api/posts/[id]` - Toggle post visibility (admin only)

## Data Model

### Post

- `id` - Unique identifier
- `facebookUrl` - Facebook post URL
- `title` - Optional post title
- `description` - Optional post description
- `thumbnailUrl` - Path to uploaded image
- `isActive` - Visibility status
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## Validation Rules

### Facebook URL

Must start with:
- `https://www.facebook.com/`
- `https://fb.watch/`

### Image Upload

- **Formats**: JPG, PNG, WEBP
- **Max Size**: 2MB
- **Storage**: `/public/uploads/`

## Production Deployment

### Recommended Changes

1. **Database**: Switch from SQLite to PostgreSQL or MySQL
2. **Image Storage**: Use cloud storage (Cloudinary, S3, etc.)
3. **Authentication**: Implement proper password hashing
4. **Environment**: Set secure admin credentials

### Environment Variables

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
ADMIN_USERNAME="your-admin-username"
ADMIN_PASSWORD="your-secure-password"
```

### Build for Production

```bash
npm run build
npm run start
```

## Security Notes

- Admin authentication uses simple cookie-based sessions
- Passwords are compared in plain text (for development only)
- File uploads are validated for type and size
- All admin routes check authentication status

**For production**: Implement proper password hashing (bcrypt) and consider using NextAuth.js or similar.

## Future Enhancements

- Multi-platform support (YouTube, Instagram)
- Click analytics
- Multiple admin accounts
- Drag-and-drop post ordering
- Bulk operations
- Advanced filtering and search

## License

MIT

## Support

For issues or questions, please refer to the Product Requirements Document (PRD).
