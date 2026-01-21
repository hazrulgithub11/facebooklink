# 🎨 Apple-like Glassmorphism Design System

## Overview

This design system creates an exclusive, premium reading experience inspired by Apple's Human Interface Guidelines. The interface uses glassmorphism, elegant gradients, and fluid motion to feel calm, intentional, and high-end.

---

## 🎯 Design Principles

### 1. **Calm & Intentional**
- Soft, breathable spacing
- Muted color palette with subtle accents
- No visual clutter or unnecessary elements

### 2. **Premium & Exclusive**
- Frosted glass surfaces with backdrop blur
- Layered depth through shadows and transparency
- High-quality typography and precise spacing

### 3. **Fluid & Responsive**
- iOS-like easing curves (`cubic-bezier(0.4, 0, 0.2, 1)`)
- Gentle press animations (scale to 0.98)
- Smooth hover transitions with subtle elevation

---

## 🎨 Color System

### Primary Accent: Gradient Red (Crimson)
```
crimson-600: #d32f4a  (Primary)
crimson-700: #b2233c  (Deep)
crimson-500: #e74c63  (Soft Rose)
```

**Usage:**
- Active navigation states
- Saved/bookmarked items
- Subtle gradient overlays
- Accent dots and indicators

### Neutrals: Near-Black & Soft Grays
```
slate-950: #0f1419  (Headings)
slate-850: #1a202e  (Body text)
slate-600: #64748b  (Descriptions)
slate-400: #94a3b8  (Metadata)
```

**Usage:**
- Avoid pure black (#000000)
- Use slate-950 for primary text
- Use slate-400 for timestamps and secondary info

### Background System
```
Base: Gradient from gray-50 → white → rose-50/30
Overlay 1: crimson-200/20 blur (top-right)
Overlay 2: crimson-100/15 blur (bottom-left)
```

---

## 🪟 Glassmorphism

### Glass Card Base
```css
background: rgba(255, 255, 255, 0.72)
backdrop-filter: blur(20px)
border: 1px solid rgba(255, 255, 255, 0.18)
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07)
border-radius: 24px (rounded-3xl)
```

### Glass Card Hover
```css
background: rgba(255, 255, 255, 0.85)
box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.12)
transform: translateY(-2px)
```

### Glass Card Active (Press)
```css
transform: translateY(-1px) scale(0.98)
box-shadow: 0 6px 24px 0 rgba(31, 38, 135, 0.08)
```

### Glass Navigation (Header/Footer)
```css
background: rgba(255, 255, 255, 0.8)
backdrop-filter: blur(20px)
border: 1px solid rgba(0, 0, 0, 0.05)
```

---

## 📐 Layout & Spacing

### Container Width
- Max width: `680px` (optimized for reading)
- Padding: `20px` (px-5)
- Mobile-first approach

### Card Spacing
- Between cards: `16px` (space-y-4)
- Card padding: `20px` (p-5)
- Content gap: `16px` (gap-4)

### Border Radius
```
Small elements: 16px (rounded-2xl)
Cards: 24px (rounded-3xl)
Buttons: 16px (rounded-2xl)
Thumbnails: 16px (rounded-2xl)
```

---

## 🔤 Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 
             'SF Pro Display', 'SF Pro Text', 
             'Helvetica Neue', Helvetica, Arial, sans-serif
```

### Type Scale
```
Heading (H1): 28px, font-semibold, tracking-tight
Card Title: 19px (desktop), 17px (mobile), font-semibold, leading-snug
Description: 15px (desktop), 14px (mobile), regular, leading-relaxed
Metadata: 13px (desktop), 12px (mobile), font-medium
Nav Labels: 10px, font-semibold, tracking-tight
```

### Text Colors
- Headings: `slate-950`
- Body: `slate-600`
- Metadata: `slate-400`
- Active states: `crimson-600`

---

## 🎭 Motion & Animation

### Easing Curves
```css
Apple standard: cubic-bezier(0.4, 0, 0.2, 1)
Soft bounce: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Transitions
```css
Default: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
Press: all 0.15s cubic-bezier(0.4, 0, 0.2, 1)
Hover: all 0.2s ease
```

### Press Animation
```css
.press-effect:active {
  transform: scale(0.98);
  opacity: 0.92;
}
```

### Card Hover
```css
.glass-card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.12);
}
```

### Image Zoom
```css
.group:hover img {
  transform: scale(1.05);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🖼️ Card Design

### Structure
```
┌─────────────────────────────────────┐
│ ┌─────────────────────┐  ┌────────┐│
│ │ Title (2 lines max) │  │        ││
│ │                     │  │ Image  ││
│ │ Description         │  │ 128px  ││
│ │ (2 lines max)       │  │        ││
│ │                     │  └────────┘│
│ │ • Date              │            │
│ └─────────────────────┘            │
└─────────────────────────────────────┘
```

### Thumbnail
- Size: `128px × 128px` (desktop), `112px × 112px` (mobile)
- Border radius: `16px` (rounded-2xl)
- Gloss overlay: `bg-gradient-to-br from-white/20`
- Hover: Scale to 1.05

### Save Button
- Position: Absolute top-right (12px, 12px)
- Background: Frosted glass (`rgba(255, 255, 255, 0.6)`)
- Border: `1px solid rgba(255, 255, 255, 0.3)`
- Size: Icon 20px, padding 10px
- States:
  - Saved: `crimson-600` (filled)
  - Unsaved: `slate-500` (outline)

---

## 🧭 Navigation

### Bottom Navigation (Mobile)
- Frosted glass background
- 3 items: Home, Saved, Admin
- Active state: `crimson-600` with filled icon
- Inactive state: `slate-400` with outline icon
- Labels: 10px, font-semibold
- Safe area support for iOS notch

### Header
- Frosted glass with subtle border
- Title: 28px, font-semibold
- Admin link: Small, muted, top-right

---

## 🎨 Visual Effects

### Shadows
```css
Soft: 0 2px 16px rgba(0, 0, 0, 0.04)
Soft-lg: 0 4px 24px rgba(0, 0, 0, 0.06)
Glass: 0 8px 32px 0 rgba(31, 38, 135, 0.07)
Glass-lg: 0 12px 48px 0 rgba(31, 38, 135, 0.12)
```

### Gradients
```css
Background: linear-gradient(to bottom right, 
  from-gray-50 via-white to-rose-50/30)

Crimson accent: linear-gradient(135deg, 
  #b2233c 0%, #d32f4a 50%, #e74c63 100%)

Gloss overlay: linear-gradient(to bottom right,
  from-white/20 via-transparent to-transparent)
```

### Blur
```css
Glass blur: 20px
Frost light: 20px
Frost lighter: 16px
Background orbs: 48px (blur-3xl)
```

---

## 📱 Mobile Optimization

### Touch Targets
- Minimum: 44px × 44px
- Cards: Entire surface is tappable
- Buttons: 40px × 40px minimum

### Gestures
- Tap: Press animation (scale 0.98)
- Scroll: Smooth, elastic (iOS-style)
- Swipe: Native browser behavior

### Safe Areas
```css
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
```

---

## 🚫 What to Avoid

❌ Pure black colors  
❌ Sharp corners (< 12px radius)  
❌ Heavy borders (> 1px)  
❌ Harsh shadows  
❌ Flashy animations  
❌ Social media UI patterns  
❌ Cluttered layouts  
❌ Multiple accent colors  

---

## ✅ Best Practices

✓ Use frosted glass for overlays  
✓ Apply subtle gradients  
✓ Maintain large corner radii  
✓ Use gentle press animations  
✓ Keep generous spacing  
✓ Limit text to 2-3 lines  
✓ Use SF Pro-style typography  
✓ Apply soft, diffused shadows  
✓ Keep motion smooth and natural  

---

## 🎯 Component Checklist

When creating new components:

- [ ] Uses glassmorphism (`glass-card` class)
- [ ] Has large border radius (≥ 16px)
- [ ] Includes press animation
- [ ] Uses crimson accent sparingly
- [ ] Has soft shadows
- [ ] Typography follows scale
- [ ] Spacing is generous
- [ ] Motion is smooth (0.2-0.5s)
- [ ] Touch targets ≥ 44px
- [ ] Supports safe areas (iOS)

---

## 🔧 Tailwind Utilities

### Custom Classes
```css
.glass-card              // Base frosted glass card
.glass-card-hover        // Hover/press states
.glass-nav               // Navigation glass
.frost-light             // Light frost (60% opacity)
.frost-lighter           // Lighter frost (40% opacity)
.press-effect            // iOS-like press animation
.gradient-crimson        // Accent gradient
.text-shadow-soft        // Subtle text shadow
.scroll-smooth-ios       // Smooth iOS scrolling
```

### Color Tokens
```
crimson-{50-900}         // Gradient red system
slate-{850, 950}         // Near-black variants
```

---

## 📚 References

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [SF Pro Typography](https://developer.apple.com/fonts/)
- [iOS Design Patterns](https://developer.apple.com/design/resources/)
- [Glassmorphism UI](https://hype4.academy/tools/glassmorphism-generator)

---

**Design Version:** 1.0  
**Last Updated:** January 2026  
**Platform:** Next.js 15 + Tailwind CSS 4

