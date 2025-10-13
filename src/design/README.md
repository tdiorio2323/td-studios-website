# TD Studios Design System

**Version**: 1.0
**Last Updated**: 2025-10-12

A comprehensive design token system for consistent, accessible, and maintainable UI development.

---

## Quick Start

### 1. Import CSS Tokens

Add to your main CSS file (`src/index.css` or `src/App.css`):

```css
@import './design/tokens.css';
```

### 2. Use Tokens in Components

```tsx
import { brand, brandStyles } from '@/design/brand';

// Example: Card component
export function Card() {
  return (
    <div style={brandStyles.card}>
      <h2 style={{ color: brand.colors.text.primary }}>
        Card Title
      </h2>
    </div>
  );
}
```

---

## Token Categories

### Colors

```tsx
import { brand } from '@/design/brand';

// Brand colors
brand.colors.primary        // #0B0B0C
brand.colors.secondary      // #3A3A3F
brand.colors.accent         // #3B82F6

// Semantic colors
brand.colors.success        // #10B981
brand.colors.error          // #EF4444
brand.colors.warning        // #F59E0B

// Text colors
brand.colors.text.primary   // High contrast
brand.colors.text.secondary // Medium contrast
brand.colors.text.tertiary  // Low contrast

// Glassmorphism
brand.colors.glass.background
brand.colors.glass.border
```

### Typography

```tsx
// Font families
brand.typography.family.primary  // Inter
brand.typography.family.display  // Bebas Neue
brand.typography.family.mono     // JetBrains Mono

// Font sizes
brand.typography.size.display    // 56px
brand.typography.size.h1         // 40px
brand.typography.size.h2         // 32px
brand.typography.size.body       // 16px

// Font weights
brand.typography.weight.regular  // 400
brand.typography.weight.medium   // 500
brand.typography.weight.bold     // 700
```

### Spacing

```tsx
// Use consistent spacing scale
brand.spacing[0]   // 0
brand.spacing[1]   // 4px
brand.spacing[2]   // 8px
brand.spacing[4]   // 16px
brand.spacing[6]   // 32px
brand.spacing[8]   // 64px

// Example
<div style={{ padding: brand.spacing[4] }}>Content</div>
```

### Border Radius

```tsx
brand.radius.sm    // 4px
brand.radius.md    // 8px
brand.radius.lg    // 16px
brand.radius.full  // 9999px
```

### Shadows

```tsx
brand.shadows.sm      // Subtle elevation
brand.shadows.md      // Medium elevation
brand.shadows.lg      // High elevation
brand.shadows.glass   // Premium glow effect
```

---

## Usage Patterns

### 1. Inline Styles (Simple Components)

```tsx
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: brand.spacing[4],
        borderRadius: brand.radius.md,
        background: brand.colors.accent,
        color: brand.colors.text.inverse,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
```

### 2. Predefined Styles (Reusable Patterns)

```tsx
import { brandStyles } from '@/design/brand';

export function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={brandStyles.glassCard}>
      {children}
    </div>
  );
}
```

### 3. CSS Custom Properties (Best for Tailwind)

In your component CSS:

```css
.my-component {
  color: var(--text-primary);
  background: var(--surface);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

### 4. Tailwind with CSS Variables

Configure `tailwind.config.js` to use design tokens:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--brand-primary)',
        'brand-accent': 'var(--brand-accent)',
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '4': 'var(--space-4)',
      },
    },
  },
};
```

Then use in components:

```tsx
<div className="bg-brand-primary text-white p-4 rounded-md">
  Content
</div>
```

---

## Component Examples

### Button

```tsx
import { brand } from '@/design/brand';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
}: {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}) {
  const baseStyles = {
    fontFamily: brand.typography.family.primary,
    fontWeight: brand.typography.weight.medium,
    borderRadius: brand.radius.md,
    border: 'none',
    cursor: 'pointer',
    transition: `all ${brand.transitions.duration.normal} ${brand.transitions.easing.out}`,
  };

  const variantStyles = {
    primary: {
      background: brand.colors.accent,
      color: brand.colors.text.inverse,
    },
    secondary: {
      background: 'transparent',
      color: brand.colors.text.primary,
      border: `1px solid ${brand.colors.gray[300]}`,
    },
  };

  const sizeStyles = {
    sm: { height: brand.components.button.height.sm, padding: brand.components.button.padding.sm },
    md: { height: brand.components.button.height.md, padding: brand.components.button.padding.md },
    lg: { height: brand.components.button.height.lg, padding: brand.components.button.padding.lg },
  };

  return (
    <button style={{ ...baseStyles, ...variantStyles[variant], ...sizeStyles[size] }}>
      {children}
    </button>
  );
}
```

### Card

```tsx
import { brand, brandStyles } from '@/design/brand';

export function Card({
  children,
  hover = false,
}: {
  children: React.ReactNode;
  hover?: boolean;
}) {
  const hoverStyles = hover
    ? {
        transition: brandStyles.transition.transition,
        cursor: 'pointer',
        ':hover': {
          transform: 'translateY(-4px)',
          boxShadow: brand.components.card.shadowHover,
        },
      }
    : {};

  return (
    <div style={{ ...brandStyles.card, ...hoverStyles }}>
      {children}
    </div>
  );
}
```

### Heading

```tsx
import { brand } from '@/design/brand';

export function Heading({
  level = 1,
  children,
}: {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
}) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeMap = {
    1: { fontSize: brand.typography.size.h1, lineHeight: brand.typography.lineHeight.h1 },
    2: { fontSize: brand.typography.size.h2, lineHeight: brand.typography.lineHeight.h2 },
    3: { fontSize: brand.typography.size.h3, lineHeight: brand.typography.lineHeight.h3 },
  };

  return (
    <Tag
      style={{
        ...sizeMap[level],
        fontFamily: brand.typography.family.primary,
        fontWeight: brand.typography.weight.bold,
        color: brand.colors.text.primary,
        margin: 0,
      }}
    >
      {children}
    </Tag>
  );
}
```

---

## Accessibility Guidelines

### Color Contrast

All token combinations meet **WCAG AA** standards:

- **Body text** (16px): 4.5:1 minimum contrast
- **Large text** (24px+): 3:1 minimum contrast
- **UI components**: 3:1 minimum contrast

**Test your combinations**:
```tsx
// ✅ Good: High contrast
<p style={{ color: brand.colors.text.primary, background: brand.colors.surface }}>
  Text
</p>

// ❌ Bad: Low contrast
<p style={{ color: brand.colors.gray[400], background: brand.colors.gray[300] }}>
  Text
</p>
```

### Focus States

Always provide visible focus indicators:

```tsx
const focusStyles = {
  outline: `2px solid ${brand.colors.accent}`,
  outlineOffset: '2px',
};

<button
  style={baseStyles}
  onFocus={(e) => Object.assign(e.target.style, focusStyles)}
>
  Button
</button>
```

### Semantic Colors

Don't rely on color alone:

```tsx
// ❌ Bad: Color only
<div style={{ color: brand.colors.error }}>Error</div>

// ✅ Good: Color + icon + text
<div style={{ color: brand.colors.error }}>
  <AlertIcon />
  Error: Please fix this issue
</div>
```

---

## Best Practices

### ✅ Do's

1. **Always use tokens** instead of hard-coded values
   ```tsx
   // ✅ Good
   <div style={{ padding: brand.spacing[4] }}>

   // ❌ Bad
   <div style={{ padding: '16px' }}>
   ```

2. **Use semantic color names** when possible
   ```tsx
   // ✅ Good
   <p style={{ color: brand.colors.text.secondary }}>

   // ❌ Avoid
   <p style={{ color: brand.colors.gray[600] }}>
   ```

3. **Leverage predefined styles** for common patterns
   ```tsx
   // ✅ Good
   <div style={brandStyles.glassCard}>

   // ❌ Verbose
   <div style={{
     background: 'rgba(255, 255, 255, 0.05)',
     backdropFilter: 'blur(12px)',
     ...
   }}>
   ```

### ❌ Don'ts

1. **Don't modify token values** directly in components
2. **Don't mix token systems** (use brand tokens consistently)
3. **Don't hard-code dimensions** that exist in the spacing scale
4. **Don't skip accessibility** checks for color contrast

---

## Migration Guide

### From Hard-Coded Values

**Before**:
```tsx
<button style={{
  padding: '12px 16px',
  background: '#3B82F6',
  color: '#fff',
  borderRadius: '8px',
}}>
```

**After**:
```tsx
<button style={{
  padding: brand.spacing[3] + ' ' + brand.spacing[4],
  background: brand.colors.accent,
  color: brand.colors.text.inverse,
  borderRadius: brand.radius.md,
}}>
```

### From Tailwind Classes

Keep Tailwind but use CSS variables:

**tailwind.config.js**:
```js
theme: {
  extend: {
    colors: {
      primary: 'var(--brand-primary)',
      accent: 'var(--brand-accent)',
    },
  },
}
```

**Component**:
```tsx
<button className="bg-accent text-white px-4 py-3 rounded-md">
  Button
</button>
```

---

## Testing Tokens

```tsx
import { brand } from '@/design/brand';

// Verify tokens are defined
console.assert(brand.colors.primary !== undefined, 'Primary color missing');
console.assert(brand.spacing[4] !== undefined, 'Spacing-4 missing');

// Check token values resolve
const element = document.createElement('div');
element.style.color = brand.colors.primary;
console.log(getComputedStyle(element).color); // Should output RGB value
```

---

## Support & Documentation

- **Full Brand Guide**: `docs/BRAND_GUIDE.md`
- **Quick Reference**: `docs/BRAND_QUICK_REFERENCE.md`
- **Token Source**: `src/design/tokens.css` (CSS) and `src/design/brand.ts` (TypeScript)

**Questions?** Contact TD Studios Design Team
