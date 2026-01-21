# 🚀 Design System Quick Start

## Get Started in 5 Minutes

This guide helps you quickly understand and use the Apple-inspired glassmorphism design system.

---

## 🎨 Core Concepts

### 1. Glassmorphism
Use frosted glass for cards and overlays:

```jsx
<div className="glass-card rounded-3xl p-5">
  Your content here
</div>
```

### 2. Crimson Accent
Use sparingly for active states:

```jsx
<button className="text-crimson-600">
  Active
</button>
```

### 3. Large Corners
Always use large border radius:

```jsx
<div className="rounded-3xl">  {/* 24px - Cards */}
<div className="rounded-2xl">  {/* 16px - Buttons, images */}
```

### 4. iOS Motion
Use Apple-style easing:

```jsx
<button className="press-effect">
  Tap me
</button>
```

---

## 📦 Pre-built Components

### Glass Card
```jsx
<div className="glass-card glass-card-hover rounded-3xl p-5">
  <h2 className="text-[19px] font-semibold text-slate-950">
    Title
  </h2>
  <p className="text-[15px] text-slate-600">
    Description
  </p>
</div>
```

### Frosted Button
```jsx
<button className="frost-light rounded-2xl px-6 py-3 press-effect">
  Button Text
</button>
```

### Glass Navigation
```jsx
<nav className="glass-nav border-b">
  <div className="max-w-[680px] mx-auto px-5 py-5">
    Navigation content
  </div>
</nav>
```

### Image with Gloss
```jsx
<div className="relative rounded-2xl overflow-hidden">
  <Image src="..." alt="..." fill />
  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
</div>
```

---

## 🎨 Color System Cheat Sheet

### Text Colors
```jsx
<h1 className="text-slate-950">    {/* Headings */}
<p className="text-slate-600">     {/* Body */}
<span className="text-slate-400">  {/* Metadata */}
<a className="text-crimson-600">   {/* Links/Active */}
```

### Background Colors
```jsx
<div className="bg-gradient-to-br from-gray-50 via-white to-rose-50/30">
  {/* Page background */}
</div>
```

### Accent Colors
```jsx
<button className="text-crimson-600">  {/* Active */}
<button className="text-slate-400">    {/* Inactive */}
```

---

## 📝 Typography Scale

```jsx
{/* Header */}
<h1 className="text-[28px] font-semibold tracking-tight text-slate-950">

{/* Card Title */}
<h2 className="text-[19px] font-semibold leading-snug text-slate-950">

{/* Description */}
<p className="text-[15px] leading-relaxed text-slate-600">

{/* Metadata */}
<span className="text-[13px] font-medium text-slate-400">

{/* Nav Label */}
<span className="text-[10px] font-semibold tracking-tight">
```

---

## 🎭 Animation Patterns

### Press Effect
```jsx
<button className="press-effect">
  Button
</button>

// CSS: scale(0.98) + opacity(0.92) on active
```

### Hover Lift
```jsx
<div className="glass-card-hover">
  Card
</div>

// CSS: translateY(-2px) + shadow elevation
```

### Image Zoom
```jsx
<div className="group">
  <img className="group-hover:scale-105 transition-transform duration-500" />
</div>
```

---

## 📐 Spacing System

### Container
```jsx
<div className="max-w-[680px] mx-auto px-5 py-6">
  Content
</div>
```

### Card Spacing
```jsx
<div className="space-y-4">  {/* Between cards */}
  <div className="p-5">      {/* Inside card */}
    <div className="gap-4">  {/* Between elements */}
```

### Touch Targets
```jsx
<button className="p-2.5">  {/* 40×40px minimum */}
```

---

## 🪟 Glass Variants

### Standard Glass (Cards)
```jsx
<div className="glass-card">
  // rgba(255, 255, 255, 0.72) + blur(20px)
</div>
```

### Light Frost (Buttons)
```jsx
<div className="frost-light">
  // rgba(255, 255, 255, 0.6) + blur(20px)
</div>
```

### Lighter Frost (Overlays)
```jsx
<div className="frost-lighter">
  // rgba(255, 255, 255, 0.4) + blur(16px)
</div>
```

### Navigation Glass
```jsx
<nav className="glass-nav">
  // rgba(255, 255, 255, 0.8) + blur(20px)
</nav>
```

---

## 🎯 Common Patterns

### Card with Image
```jsx
<div className="glass-card glass-card-hover rounded-3xl p-5">
  <div className="flex gap-4">
    {/* Text content */}
    <div className="flex-1">
      <h2 className="text-[19px] font-semibold text-slate-950 mb-2">
        Title
      </h2>
      <p className="text-[15px] text-slate-600 mb-3">
        Description
      </p>
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 rounded-full bg-crimson-400/60" />
        <span className="text-[13px] text-slate-400">
          Date
        </span>
      </div>
    </div>
    
    {/* Image */}
    <div className="w-32 h-32 rounded-2xl overflow-hidden relative">
      <Image src="..." alt="..." fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
    </div>
  </div>
</div>
```

### Floating Action Button
```jsx
<button className="frost-light rounded-full p-2.5 shadow-soft press-effect border border-white/30">
  <svg className="w-5 h-5 text-slate-500">
    {/* Icon */}
  </svg>
</button>
```

### Navigation Item
```jsx
<button className={`
  flex flex-col items-center gap-1 
  py-2 px-6 rounded-2xl press-effect
  ${active ? 'text-crimson-600' : 'text-slate-400'}
`}>
  <svg className="w-7 h-7" />
  <span className="text-[10px] font-semibold tracking-tight">
    Label
  </span>
</button>
```

### Accent Dot
```jsx
<div className="flex items-center gap-2">
  <div className="w-1 h-1 rounded-full bg-crimson-400/60" />
  <span className="text-[13px] text-slate-400">
    Text
  </span>
</div>
```

---

## 🎨 Shadow System

```jsx
<div className="shadow-soft">      {/* Soft: 0 2px 16px */}
<div className="shadow-soft-lg">   {/* Soft-lg: 0 4px 24px */}
<div className="shadow-glass">     {/* Glass: 0 8px 32px */}
<div className="shadow-glass-lg">  {/* Glass-lg: 0 12px 48px */}
```

---

## 📱 Responsive Patterns

### Mobile-First Typography
```jsx
<h2 className="text-[17px] sm:text-[19px]">
  Title
</h2>
```

### Conditional Navigation
```jsx
<nav className="md:hidden">
  {/* Mobile only */}
</nav>
```

### Safe Areas
```jsx
<nav className="safe-area-bottom">
  {/* Respects iOS notch */}
</nav>
```

---

## ⚡ Performance Tips

### 1. Use CSS Transforms
```jsx
// ✅ Good (GPU-accelerated)
<div className="hover:scale-105 transition-transform">

// ❌ Bad (CPU-bound)
<div className="hover:w-[110%] transition-all">
```

### 2. Optimize Backdrop Blur
```jsx
// ✅ Good (use sparingly)
<div className="backdrop-blur-glass">

// ❌ Bad (too many blur elements)
<div className="backdrop-blur-glass">
  <div className="backdrop-blur-glass">
    <div className="backdrop-blur-glass">
```

### 3. Proper Image Sizing
```jsx
<Image 
  src="..." 
  alt="..." 
  width={128} 
  height={128}
  sizes="128px"  // ✅ Specify sizes
/>
```

---

## 🚫 Common Mistakes

### ❌ Don't
```jsx
// Sharp corners
<div className="rounded-md">

// Pure black
<p className="text-black">

// Heavy borders
<div className="border-2">

// Multiple accents
<button className="text-blue-600 bg-red-500">

// Harsh shadows
<div className="shadow-2xl">
```

### ✅ Do
```jsx
// Large corners
<div className="rounded-3xl">

// Near-black
<p className="text-slate-950">

// Subtle borders
<div className="border border-white/18">

// Single accent
<button className="text-crimson-600">

// Soft shadows
<div className="shadow-soft">
```

---

## 🎯 Design Checklist

When creating a new component:

- [ ] Uses `glass-card` or `frost-light` for surfaces
- [ ] Has large border radius (≥ 16px)
- [ ] Includes `press-effect` for interactive elements
- [ ] Uses crimson accent sparingly
- [ ] Has soft shadows (`shadow-soft`)
- [ ] Typography follows scale (17-19-28px)
- [ ] Spacing is generous (p-5, gap-4)
- [ ] Motion is smooth (duration-300, ease-apple)
- [ ] Touch targets ≥ 44px
- [ ] Text uses slate colors (not gray)

---

## 🔧 Utility Classes Reference

### Glass Effects
```
.glass-card              Base frosted glass card
.glass-card-hover        Hover/press states
.glass-nav               Navigation glass
.frost-light             Light frost (60%)
.frost-lighter           Lighter frost (40%)
```

### Motion
```
.press-effect            iOS press animation
.transition-apple        Apple easing curve
```

### Text
```
.text-shadow-soft        Subtle text shadow
.tracking-tight          Tight letter spacing
.leading-snug            Snug line height
.leading-relaxed         Relaxed line height
```

### Layout
```
.scroll-smooth-ios       Smooth iOS scrolling
.safe-area-bottom        iOS safe area padding
```

---

## 📚 Examples

### Example 1: Simple Card
```jsx
<div className="glass-card rounded-3xl p-5">
  <h2 className="text-[19px] font-semibold text-slate-950 mb-2">
    Card Title
  </h2>
  <p className="text-[15px] text-slate-600">
    Card description goes here.
  </p>
</div>
```

### Example 2: Interactive Button
```jsx
<button className="
  frost-light 
  rounded-2xl 
  px-6 py-3 
  press-effect 
  border border-white/30
  text-[15px] font-semibold
  text-slate-950
">
  Click Me
</button>
```

### Example 3: Navigation Bar
```jsx
<nav className="glass-nav border-b sticky top-0 z-10">
  <div className="max-w-[680px] mx-auto px-5 py-5">
    <div className="flex justify-between items-center">
      <h1 className="text-[28px] font-semibold tracking-tight text-slate-950">
        Title
      </h1>
      <button className="text-[14px] font-medium text-crimson-600">
        Action
      </button>
    </div>
  </div>
</nav>
```

### Example 4: Card List
```jsx
<div className="max-w-[680px] mx-auto px-5 py-6">
  <div className="space-y-4">
    {items.map(item => (
      <div key={item.id} className="glass-card glass-card-hover rounded-3xl p-5">
        {/* Card content */}
      </div>
    ))}
  </div>
</div>
```

---

## 🎨 Color Picker

### Quick Copy-Paste
```css
/* Primary Accent */
--crimson-600: #d32f4a;

/* Text */
--slate-950: #0f1419;
--slate-600: #64748b;
--slate-400: #94a3b8;

/* Glass */
--glass-card: rgba(255, 255, 255, 0.72);
--glass-nav: rgba(255, 255, 255, 0.8);
--frost-light: rgba(255, 255, 255, 0.6);

/* Shadows */
--shadow-soft: 0 2px 16px rgba(0, 0, 0, 0.04);
--shadow-glass: 0 8px 32px rgba(31, 38, 135, 0.07);
```

---

## 🚀 Getting Started

1. **Copy a pattern** from this guide
2. **Adjust content** to your needs
3. **Test on mobile** (use browser dev tools)
4. **Check contrast** (use accessibility tools)
5. **Refine spacing** (use Tailwind spacing scale)

---

## 📖 Further Reading

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Complete design system
- [DESIGN_SHOWCASE.md](./DESIGN_SHOWCASE.md) - Visual examples
- [DESIGN_COMPARISON.md](./DESIGN_COMPARISON.md) - Before/after
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Technical details

---

## 💡 Pro Tips

1. **Start with glass-card** - It's the foundation
2. **Use crimson sparingly** - Less is more
3. **Test motion on mobile** - It should feel natural
4. **Keep corners large** - 16px minimum, 24px preferred
5. **Use SF Pro font** - It's already in the font stack
6. **Add accent dots** - They add visual interest
7. **Maintain spacing** - Generous padding (20px)
8. **Test on iOS** - Safe areas are important
9. **Use soft shadows** - Never harsh
10. **Follow the scale** - 17-19-28px typography

---

**Happy designing!** 🎨

If you have questions, refer to the full documentation in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

---

**Quick Start Version:** 1.0  
**Last Updated:** January 2026  
**Platform:** Next.js 15 + Tailwind CSS

