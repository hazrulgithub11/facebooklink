# Product Requirements Document (PRD)

## 1. Product Overview

### 1.1 Product Name

Simple Social Link Aggregator (Facebook Public Posts)

### 1.2 Problem Statement

Admins want a very simple way to collect and display Facebook **public post links** in a single web app. The app should not rely on Facebook embeds, scraping, or APIs. Instead, admins manually provide:

* A Facebook public post URL (example: https://www.facebook.com/share/p/1FygztYnrv/)
* A custom uploaded image to act as the card thumbnail

End users only consume the content by clicking cards that link out to Facebook.

### 1.3 Solution Summary

Build a **full-stack Next.js web application** with:

* Public feed page that displays cards
* Admin panel to add/remove posts
* Manual image upload for card thumbnails
* No scraping, no embedding, no preview fetching

The app acts as a **curated link board**, not a content mirror.

---

## 2. Goals & Non-Goals

### 2.1 Goals

* Display Facebook public post links as cards
* Allow admin to manage links easily
* Fast, simple, and predictable behavior
* No dependency on Facebook APIs or embed scripts

### 2.2 Non-Goals

* ❌ No automatic metadata fetching
* ❌ No Open Graph scraping
* ❌ No Facebook authentication
* ❌ No user accounts (only admin)
* ❌ No comments, likes, or analytics

---

## 3. Target Users

### 3.1 End Users (Public)

* View curated Facebook post links
* Click a card to open Facebook in a new tab

### 3.2 Admin Users

* Add new Facebook post links
* Upload custom thumbnail images
* Remove or hide posts

---

## 4. User Stories

### 4.1 Public User Stories

* As a user, I want to see a list of Facebook post cards
* As a user, I want to click a card and open the Facebook post
* As a user, I want the feed to load fast and look clean

### 4.2 Admin User Stories

* As an admin, I want to add a Facebook post URL
* As an admin, I want to upload an image for the card thumbnail
* As an admin, I want to delete or disable a post

---

## 5. Functional Requirements

### 5.1 Public Feed Page

**Description:**
The main page that displays all active Facebook post cards.

**Requirements:**

* Display cards in grid or list layout
* Each card contains:

  * Uploaded thumbnail image
  * Optional title or caption (manual input)
  * Facebook post URL
* Clicking the card:

  * Opens Facebook link in a new tab (`target="_blank"`)

---

### 5.2 Admin Panel

**Access:**

* Protected route (simple auth or environment-based access)

**Features:**

* Add new Facebook post
* Upload image for thumbnail
* Optional text fields:

  * Title
  * Short description
* Delete existing posts
* Toggle post visibility (optional)

---

### 5.3 Add Facebook Post Flow

**Inputs:**

* Facebook Post URL (required)
* Thumbnail Image Upload (required)
* Title (optional)
* Description (optional)

**Validation Rules:**

* URL must start with:

  * `https://www.facebook.com/`
  * `https://fb.watch/`
* Image must be:

  * JPG / PNG / WEBP
  * Max size: configurable (e.g. 2MB)

---

### 5.4 Image Handling

* Image is uploaded manually by admin
* Stored in:

  * Cloud storage (recommended) OR
  * Local `/public/uploads` (development only)
* Image URL is saved in database
* No image auto-generation or preview fetching

---

## 6. Non-Functional Requirements

### 6.1 Performance

* Public feed loads in < 2 seconds
* Images are optimized and lazy-loaded

### 6.2 Security

* Admin routes protected
* File upload validation
* No execution of external scripts

### 6.3 Reliability

* App should still work if Facebook blocks embeds
* No dependency on Facebook availability beyond link clicks

---

## 7. Tech Stack

### 7.1 Frontend

* Next.js (App Router)
* React
* Tailwind CSS

### 7.2 Backend

* Next.js Server Actions or API Routes
* Prisma ORM

### 7.3 Database

* PostgreSQL / MySQL / SQLite (development)

### 7.4 Storage

* Cloudinary / S3 (production)
* Local storage (development)

---

## 8. Data Model (Initial)

### 8.1 Post Entity

* `id` (UUID)
* `facebookUrl` (String)
* `title` (String, optional)
* `description` (String, optional)
* `thumbnailUrl` (String)
* `isActive` (Boolean)
* `createdAt` (DateTime)
* `updatedAt` (DateTime)

---

## 9. UX / UI Requirements

### 9.1 Card Design

* Image thumbnail (primary focus)
* Clean, minimal design
* Consistent aspect ratio

### 9.2 Admin UI

* Simple form-based UI
* Image preview before upload
* Confirmation dialog before delete

---

## 10. Constraints & Assumptions

### Constraints

* No Facebook API usage
* No scraping or metadata extraction

### Assumptions

* Admin manually ensures links are public
* Users have Facebook access

---

## 11. Future Enhancements (Out of Scope)

* Multi-platform links (YouTube, Instagram)
* Auto-preview generation
* Multiple admin roles
* Analytics (click tracking)

---

## 12. Success Metrics

* Admin can add a post in < 30 seconds
* Public feed displays correctly on mobile & desktop
* Zero dependency failures due to Facebook changes

---

## 13. Open Questions

* Should admin authentication be password-based or environment-based?
* Should posts be ordered manually or by date?
* Should inactive posts be soft-deleted or hidden?

---

**End of PRD**
