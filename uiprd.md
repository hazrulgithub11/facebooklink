# Product Requirements Document (PRD)

## Product Title

Mobile-First Curated Link Feed – Card List UI

---

## 1. Purpose & Vision

### 1.1 Purpose

This PRD defines a **new UI-focused product specification** for the curated Facebook public post app, redesigned to follow a **clean, mobile-first card list layout**, inspired by the provided reference image (single-column feed, image-right cards, text-left hierarchy).

The goal is to create a **reading-oriented, distraction-free interface** that prioritizes clarity, scannability, and tap confidence on mobile devices.

---

### 1.2 Design Philosophy

* Content-first, not platform-first
* Minimalist, editorial-style layout
* Optimized for vertical scrolling
* Familiar to users of reading/list apps

This UI intentionally avoids social media affordances (likes, comments, embeds) and behaves more like a **curated reading list**.

---

## 2. Supported Platforms

### Primary

* Mobile Web (iOS & Android browsers)

### Secondary

* Tablet Web
* Desktop Web

> Mobile is the design baseline. Tablet and desktop scale up from mobile.

---

## 3. User Roles

### 3.1 Public User

* Browses curated Facebook post links
* Reads short titles/descriptions
* Taps to open Facebook post externally

### 3.2 Admin User

* Adds Facebook post links
* Uploads thumbnail images
* Manages visibility/order

(Admin requirements remain unchanged; this PRD focuses on **UI/UX presentation**.)

---

## 4. Core UX Pattern

### 4.1 Feed-Based Reading List

The home screen is a **vertical list of cards**, each representing one Facebook public post.

Characteristics:

* One post per row (always on mobile)
* Consistent spacing and alignment
* No masonry or grid behavior on mobile

---

## 5. Card Component Specification (Critical)

### 5.1 Card Layout Structure

**Horizontal card layout:**

```
+--------------------------------------+
| Title text            | Thumbnail   |
| Subtitle / desc       | (fixed)     |
| Metadata (date)       |             |
+--------------------------------------+
```

---

### 5.2 Card Dimensions (Mobile)

* Card height: Auto (content-driven)
* Thumbnail:

  * Fixed aspect ratio: 1:1 or 4:3
  * Fixed width (e.g. 96–112px)
  * Right-aligned
* Padding:

  * 12–16px internal padding
  * 12px vertical spacing between cards

---

### 5.3 Card Content Elements

#### Required

* **Title** (admin-defined or auto label)
* **Thumbnail image** (uploaded by admin)

#### Optional

* Short description (1–2 lines max)
* Published / added date

#### Explicitly Excluded

* Like count
* Comments
* Author avatar
* Share buttons

---

### 5.4 Text Hierarchy

* Title:

  * Font size: 15–17px
  * Font weight: Medium / Semibold
  * Max lines: 2 (truncate with ellipsis)

* Description:

  * Font size: 13–14px
  * Color: Muted / secondary
  * Max lines: 2

* Metadata:

  * Font size: 11–12px
  * Color: Light gray

---

### 5.5 Interaction Behavior

* Entire card is tappable
* On tap:

  * Opens Facebook post in new tab / external browser
* Card tap feedback:

  * Subtle background highlight or opacity change

---

## 6. Feed Behavior

### 6.1 Ordering

Default order:

* Newest first (by created date)

Optional future:

* Admin-defined manual order

---

### 6.2 Empty State

If no posts exist:

* Show centered message:

  * "No posts available"
* Optional icon illustration

---

### 6.3 Loading State

* Skeleton cards
* Placeholder blocks for:

  * Text lines
  * Thumbnail

---

## 7. Navigation & App Shell

### 7.1 Header

* App title at top (e.g. "Read Later" / custom name)
* No heavy branding
* Sticky on scroll (optional)

---

### 7.2 Bottom Navigation (Optional)

If included:

* Minimal bottom bar
* 1–2 icons max:

  * Home
  * Admin (hidden or protected)

---

## 8. Responsive Behavior

### 8.1 Mobile (≤ 640px)

* Single column list
* Horizontal card layout

### 8.2 Tablet (641–1024px)

* Still single column
* Increased padding
* Larger thumbnail

### 8.3 Desktop (≥ 1024px)

Two acceptable patterns:

**Option A (Recommended):**

* Centered single column
* Max width 720–840px

**Option B:**

* Two-column list
* Still card-list, not grid

---

## 9. Image Rules

* Admin-uploaded only
* No external image fetching
* Fallback image if missing
* Lazy-loaded

Image style:

* Slight rounded corners
* No shadows
* No overlays

---

## 10. Accessibility Requirements

* Minimum tap area: 44px
* Text contrast WCAG AA
* Images have alt text
* Keyboard navigable on desktop

---

## 11. Performance Requirements

* Initial feed load < 2 seconds
* Images optimized and resized
* No third-party embed scripts

---

## 12. Constraints

* No Facebook embeds
* No Open Graph scraping
* No dynamic preview fetching

---

## 13. Success Criteria

* User can scan 5–7 posts within 5 seconds
* User clearly understands each card is a link
* Zero layout shift during image load

---

## 14. Out of Scope

* Dark mode theming (future)
* Offline reading
* Analytics tracking
* User accounts

---

## 15. Summary

This PRD defines a **reading-list-style UI** that:

* Is optimized for mobile
* Uses one-card-per-row
* Emphasizes clarity and calm design
* Avoids all social-media clutter

The UI is intentionally simple, predictable, and scalable.

---

**End of UI-Focused PRD**
