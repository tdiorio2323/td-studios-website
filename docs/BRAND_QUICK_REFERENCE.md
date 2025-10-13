# TD Studios Brand Quick Reference

**One-page cheat sheet for developers** | Version 1.0

---

## 🎨 Colors

```tsx
import { brand } from '@/design/brand';

// Primary
brand.colors.primary     // #0B0B0C (TD Black)
brand.colors.secondary   // #3A3A3F (TD Graphite)
brand.colors.accent      // #3B82F6 (TD Blue)

// Semantic
brand.colors.success     // #10B981 (Green)
brand.colors.error       // #EF4444 (Red)
brand.colors.warning     // #F59E0B (Amber)

// Text
brand.colors.text.primary    // High contrast
brand.colors.text.secondary  // Medium contrast
```

---

## 📝 Typography

```tsx
// Font Families
brand.typography.family.primary  // Inter (UI)
brand.typography.family.display  // Bebas Neue (Headlines)

// Sizes
brand.typography.size.h1    // 40px
brand.typography.size.h2    // 32px
brand.typography.size.h3    // 24px
brand.typography.size.body  // 16px

// Weights
brand.typography.weight.regular  // 400
brand.typography.weight.medium   // 500
brand.typography.weight.bold     // 700
```

---

## 📏 Spacing

```tsx
brand.spacing[2]  // 8px  (tight)
brand.spacing[4]  // 16px (base)
brand.spacing[6]  // 32px (comfortable)
brand.spacing[8]  // 64px (spacious)
```

---

## 🔲 Radius & Shadows

```tsx
// Radius
brand.radius.sm    // 4px  (subtle)
brand.radius.md    // 8px  (standard)
brand.radius.lg    // 16px (cards)
brand.radius.full  // 9999px (pills)

// Shadows
brand.shadows.sm     // Subtle
brand.shadows.md     // Standard
brand.shadows.lg     // Elevated
brand.shadows.glass  // Premium glow
```

---

## 🚀 Quick Patterns

### Glassmorphism Card
```tsx
import { brandStyles } from '@/design/brand';

<div style={brandStyles.glassCard}>
  {/* Glass effect applied */}
</div>
```

### Standard Card
```tsx
<div style={brandStyles.card}>
  {/* Padding, radius, shadow applied */}
</div>
```

### Button (Custom)
```tsx
<button style={{
  padding: brand.spacing[4],
  borderRadius: brand.radius.md,
  background: brand.colors.accent,
  color: brand.colors.text.inverse,
}}>
  Click Me
</button>
```

---

## ♿ Accessibility Checklist

- [ ] Text contrast ≥ 4.5:1 (body) or 3:1 (large text)
- [ ] Focus states visible (2px outline, accent color)
- [ ] Don't rely on color alone (add icons/text)
- [ ] Keyboard navigation works (Tab order)
- [ ] Alt text for images
- [ ] ARIA labels for icon-only buttons

---

## 🎯 Common Use Cases

### Hero Section
```tsx
<h1 style={{
  fontSize: brand.typography.size.display, // 56px
  fontFamily: brand.typography.family.display, // Bebas Neue
  fontWeight: brand.typography.weight.bold,
  color: brand.colors.text.primary,
}}>
  Premium Mylar Packaging
</h1>
```

### Error Message
```tsx
<p style={{
  color: brand.colors.error,
  fontSize: brand.typography.size.small,
}}>
  ❌ Something went wrong
</p>
```

### CTA Button
```tsx
<button style={{
  height: brand.components.button.height.lg, // 48px
  padding: brand.components.button.padding.lg,
  background: brand.colors.accent,
  color: brand.colors.text.inverse,
  borderRadius: brand.radius.md,
  fontWeight: brand.typography.weight.medium,
  transition: `all ${brand.transitions.duration.normal} ${brand.transitions.easing.out}`,
}}>
  Get Started
</button>
```

---

## 🔧 CSS Custom Properties (Tailwind/CSS)

```css
/* In your CSS files */
.my-component {
  color: var(--text-primary);
  background: var(--surface);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

---

## 📁 File Locations

- **Full Guide**: `docs/BRAND_GUIDE.md`
- **Usage Docs**: `src/design/README.md`
- **CSS Tokens**: `src/design/tokens.css`
- **TS Tokens**: `src/design/brand.ts`

---

## 🚫 Don'ts

- ❌ Don't hard-code colors/spacing
- ❌ Don't modify logo
- ❌ Don't skip contrast checks
- ❌ Don't use generic stock photos
- ❌ Don't auto-play videos

---

## ✅ Do's

- ✅ Use design tokens exclusively
- ✅ Test with keyboard navigation
- ✅ Maintain glassmorphism aesthetic
- ✅ Follow voice & tone guidelines
- ✅ Keep animations under 500ms

---

**Need help?** Refer to full documentation or contact TD Studios Design Team
