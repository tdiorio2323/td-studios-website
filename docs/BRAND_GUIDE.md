# TD Studios Brand Guide

**Version**: 1.0
**Last Updated**: 2025-10-12
**Maintained by**: TD Studios Design Team

---

## Table of Contents

1. [Brand Strategy](#brand-strategy)
2. [Visual Identity](#visual-identity)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Motion & Animation](#motion--animation)
6. [Imagery](#imagery)
7. [Voice & Tone](#voice--tone)
8. [Component Standards](#component-standards)
9. [Accessibility](#accessibility)
10. [Brand Audit Checklist](#brand-audit-checklist)

---

## Brand Strategy

### Purpose
TD Studios empowers cannabis brands with premium design and technology solutions that elevate their market presence and drive growth.

### Vision
To be the leading creative partner for cannabis brands seeking to stand out in a competitive marketplace through exceptional design and innovative digital experiences.

### Mission
We deliver world-class mylar packaging design, custom websites, social media content, and digital assets that help cannabis businesses build authentic connections with their customers.

### Core Values
- **Excellence**: We obsess over details and deliver nothing but premium quality
- **Innovation**: We push creative boundaries while maintaining brand consistency
- **Partnership**: We succeed when our clients succeed
- **Authenticity**: We create genuine, honest brand experiences
- **Speed**: We move fast without compromising quality

### Brand Personality
- **Professional yet Approachable**: Expert without being intimidating
- **Modern & Premium**: Luxury aesthetic, accessible pricing
- **Bold & Confident**: Strong opinions, backed by results
- **Creative & Technical**: Balance artistry with engineering precision

### Brand Promise
"Premium design and technology solutions that transform cannabis brands into market leaders."

---

## Visual Identity

### Logo Usage

**Primary Logo**: TD STUDIOS wordmark
- Minimum size: 120px width (digital), 1.5 inches (print)
- Clear space: Minimum 0.5x the height of the logo on all sides
- Background: Works on light backgrounds, dark backgrounds, and photography

**Do's**:
- ✅ Use official logo files only (SVG for digital, EPS for print)
- ✅ Maintain minimum clear space
- ✅ Use on solid backgrounds when possible
- ✅ Scale proportionally

**Don'ts**:
- ❌ Stretch, skew, or rotate the logo
- ❌ Change logo colors (use official versions)
- ❌ Add effects (shadows, gradients, outlines)
- ❌ Place on busy backgrounds without sufficient contrast
- ❌ Recreate or modify the logo

**Logo Variations**:
- Primary (black on light)
- Reversed (white on dark)
- Monochrome (single color)

**File Location**: `/brand/logos/`

---

## Color System

### Primary Colors

**TD Black** `#0B0B0C`
- Use: Primary brand color, headings, high-emphasis text
- Contrast ratio on white: 20.5:1 (AAA)
- Application: Logo, nav, footer, primary buttons

**TD Graphite** `#3A3A3F`
- Use: Secondary brand color, subheadings, medium-emphasis text
- Contrast ratio on white: 11.8:1 (AAA)
- Application: Secondary text, borders, dividers

**TD Blue** `#3B82F6`
- Use: Accent color, interactive elements, calls-to-action
- Contrast ratio on white: 4.5:1 (AA)
- Application: Links, buttons, highlights, focus states

### Semantic Colors

**Success Green** `#10B981`
- Use: Success states, confirmations, positive feedback
- Contrast ratio: 4.7:1 (AA)

**Warning Amber** `#F59E0B`
- Use: Warnings, important notices, alerts
- Contrast ratio: 3.1:1 (AA Large)

**Error Red** `#EF4444`
- Use: Errors, destructive actions, critical alerts
- Contrast ratio: 4.5:1 (AA)

**Info Blue** `#3B82F6`
- Use: Informational messages, tips, neutral notices
- Contrast ratio: 4.5:1 (AA)

### Neutral Scale

| Color | Hex | Use Case |
|-------|-----|----------|
| Gray 50 | `#F9FAFB` | Page background |
| Gray 100 | `#F3F4F6` | Section backgrounds |
| Gray 200 | `#E5E7EB` | Borders, dividers |
| Gray 300 | `#D1D5DB` | Disabled backgrounds |
| Gray 400 | `#9CA3AF` | Placeholder text |
| Gray 500 | `#6B7280` | Subtle text |
| Gray 600 | `#4B5563` | Secondary text |
| Gray 700 | `#374151` | Body text |
| Gray 800 | `#1F2937` | Headings |
| Gray 900 | `#0B0B0C` | Primary text |

### Glassmorphism

**Cannabis Industry Aesthetic**:
- Background: `bg-white/5` or `bg-black/10`
- Backdrop blur: `backdrop-blur-md` (12px)
- Border: `border border-white/20`
- Shadow: `shadow-lg` with white glow for premium feel

**Example**:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 60px rgba(255, 255, 255, 0.6);
}
```

### WCAG Compliance

All color combinations meet **WCAG AA** minimum:
- Body text (16px): 4.5:1 contrast ratio
- Large text (24px+): 3:1 contrast ratio
- Interactive elements: 3:1 contrast ratio

**Testing Tools**:
- WebAIM Contrast Checker
- Chrome DevTools Accessibility Panel

---

## Typography

### Font Families

**Primary**: Inter
- Use: UI, body copy, most text
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

**Display**: Bebas Neue
- Use: Large headings, hero text, impact statements
- Weights: 400 (Regular), 700 (Bold)
- Fallback: `'Arial Narrow', Arial, sans-serif`

**Monospace**: JetBrains Mono
- Use: Code snippets, technical content
- Fallback: `'Courier New', monospace`

### Type Scale

| Level | Size | Line Height | Weight | Use Case |
|-------|------|-------------|--------|----------|
| Display | 56px | 1.1 | Bold | Hero headlines |
| H1 | 40px | 1.2 | Bold | Page titles |
| H2 | 32px | 1.25 | Bold | Section headers |
| H3 | 24px | 1.33 | Medium | Subsection headers |
| Body | 16px | 1.5 | Regular | Paragraph text |
| Small | 14px | 1.5 | Regular | Secondary text, captions |
| Caption | 12px | 1.4 | Regular | Labels, metadata |

### Type Guidelines

**Headings**:
- Use sentence case for H1-H3
- All caps only for Display/Bebas Neue
- Limit to 60 characters per line

**Body Copy**:
- Optimal line length: 50-75 characters
- Line height: 1.5 for readability
- Paragraph spacing: 1em

**Links**:
- Underline on hover
- Color: TD Blue `#3B82F6`
- Visited: Darker blue `#2563EB`

---

## Motion & Animation

### Duration

| Speed | Duration | Use Case |
|-------|----------|----------|
| Instant | 0ms | Immediate feedback |
| Fast | 150ms | Micro-interactions, tooltips |
| Normal | 300ms | Standard transitions, modals |
| Slow | 500ms | Page transitions, complex animations |

### Easing

**Primary**: `cubic-bezier(0.4, 0.0, 0.2, 1)` (ease-out)
- Use: Most UI transitions

**Secondary**: `cubic-bezier(0.0, 0.0, 0.2, 1)` (ease-in)
- Use: Exit animations

**Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- Use: Playful interactions, CTAs

### Allowed Animations

**Micro-interactions**:
- Button hover: scale(1.05) + shadow increase
- Link hover: underline slide-in
- Card hover: lift (translateY + shadow)

**Transitions**:
- Fade: opacity 0 → 1
- Slide: translateY/X + opacity
- Scale: scale(0.95) → scale(1)

**Loading States**:
- Skeleton shimmer
- Spinner rotation
- Progress bar fill

**Prohibited**:
- ❌ Auto-playing videos without user interaction
- ❌ Infinite animations (except loading spinners)
- ❌ Parallax on mobile (performance)
- ❌ Animations longer than 1 second

---

## Imagery

### Photography

**Style**:
- High-quality, professional cannabis product photography
- Clean, minimal backgrounds (white, black, or subtle gradients)
- Proper lighting, sharp focus
- Authentic, not overly stylized

**Composition**:
- Center or rule-of-thirds alignment
- Consistent aspect ratios (16:9, 4:3, 1:1)
- Generous white space

**Prohibited**:
- Generic stock photos
- Low-resolution images
- Over-processed/heavily filtered images
- Watermarked images

### Illustration

**Style**:
- Modern, minimal line art
- Solid color fills or subtle gradients
- Consistent stroke weight (2-3px)
- Cannabis leaf motifs when appropriate

**Color**:
- Use brand color palette
- Maximum 3 colors per illustration
- Ensure sufficient contrast

### Icons

**System**: Lucide React
- Style: 24px, 2px stroke, rounded corners
- Color: Inherit from context (text color)
- Usage: Navigation, buttons, metadata

**Custom**:
- Match Lucide style guidelines
- SVG format, optimized
- Consistent sizing across set

**File Location**: `/brand/icons/`

---

## Voice & Tone

### Core Voice Attributes

**Professional**
- We're experts, but we don't talk down
- Clear, direct communication
- Industry knowledge without jargon

**Confident**
- We know our craft
- Strong opinions, softly held
- Results-driven language

**Creative**
- Playful without being silly
- Clever without being confusing
- Original phrasing

**Empowering**
- You-focused, not us-focused
- Action-oriented
- Solution-minded

### Tone Variations

**Welcome/Onboarding**: Warm, encouraging
> "Let's build something amazing together."

**Error Messages**: Helpful, not blaming
> "Something went wrong. Let's try that again."

**Success**: Celebratory, brief
> "Done! Your design is ready."

**CTAs**: Direct, benefit-focused
> "Get Your Custom Mylar Design"

### Do's & Don'ts

**Do**:
- ✅ Use active voice: "We design" not "Designs are created by us"
- ✅ Be specific: "Deliver in 3 business days" not "Deliver quickly"
- ✅ Show personality: "Killer packaging" not "High-quality packaging"
- ✅ Address the user: "Your brand" not "The brand"

**Don't**:
- ❌ Use clichés: "Think outside the box", "Game changer"
- ❌ Over-promise: "Best in the world"
- ❌ Be vague: "Soon", "Many options"
- ❌ Use corporate speak: "Leverage", "Synergy", "Paradigm"

### Writing Examples

**Homepage Hero**:
❌ "We provide innovative design solutions for the cannabis industry"
✅ "Premium mylar packaging and websites that help cannabis brands stand out"

**CTA Button**:
❌ "Learn More"
✅ "See Our Work"

**Error Message**:
❌ "Error 404: The requested resource could not be found"
✅ "Page not found. Let's get you back on track."

---

## Component Standards

### Buttons

**Sizes**:
- Small: 32px height, 12px padding
- Medium: 40px height, 16px padding
- Large: 48px height, 24px padding

**Variants**:
- Primary: TD Blue background, white text
- Secondary: Gray outline, TD Black text
- Ghost: Transparent, TD Blue text

**States**:
- Default: Base styling
- Hover: scale(1.05) + shadow increase
- Focus: 2px outline, accent color
- Active: scale(0.98)
- Disabled: 50% opacity, cursor not-allowed

### Cards

**Structure**:
- Padding: 24px
- Border radius: 16px
- Shadow: `shadow-md`
- Background: White or glassmorphism

**Hover**:
- translateY(-4px)
- Shadow increase to `shadow-lg`
- Transition: 300ms ease-out

### Forms

**Inputs**:
- Height: 40px
- Padding: 12px 16px
- Border: 1px solid Gray 300
- Border radius: 8px
- Focus: 2px outline, accent color

**Labels**:
- Font size: 14px
- Font weight: 500
- Color: Gray 700
- Margin bottom: 8px

**Validation**:
- Error: Red border + error icon + message
- Success: Green border + checkmark icon
- Warning: Amber border + warning icon

---

## Accessibility

### Minimum Standards (WCAG AA)

**Contrast**:
- Body text: 4.5:1 minimum
- Large text (24px+): 3:1 minimum
- UI components: 3:1 minimum

**Focus States**:
- Visible focus indicator (2px outline)
- Accent color (#3B82F6)
- Never remove outline without replacement

**Keyboard Navigation**:
- All interactive elements reachable via Tab
- Logical tab order (top to bottom, left to right)
- Skip links for long content

**Screen Readers**:
- Semantic HTML (header, nav, main, footer)
- ARIA labels for icon-only buttons
- Alt text for all images

**Color**:
- Never rely on color alone
- Include icons or text labels
- Test with color blindness simulators

### Testing Checklist

- [ ] Keyboard navigation works
- [ ] Screen reader announces content properly
- [ ] Color contrast meets AA standards
- [ ] Focus states are visible
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] Error messages are descriptive

---

## Brand Audit Checklist

### Visual Identity
- [ ] Logo used correctly (size, spacing, background)
- [ ] Colors match brand palette exactly
- [ ] Typography follows type scale
- [ ] Spacing uses token values
- [ ] Icons consistent in style and size
- [ ] Shadows and radius from design tokens

### Content
- [ ] Voice matches brand personality
- [ ] Tone appropriate for context
- [ ] Copy is clear and concise
- [ ] CTAs are action-oriented
- [ ] Error messages are helpful

### Motion
- [ ] Animations within duration limits
- [ ] Easing curves consistent
- [ ] No auto-playing media
- [ ] Respects prefers-reduced-motion

### Imagery
- [ ] High-quality, professional photos
- [ ] Illustrations match style guide
- [ ] Icons from approved set
- [ ] Consistent aspect ratios
- [ ] Optimized file sizes

### Accessibility
- [ ] Contrast ratios meet WCAG AA
- [ ] Focus states visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color not sole indicator

### Technical
- [ ] Design tokens used (no hard-coded values)
- [ ] Component exports clean (HMR compatible)
- [ ] Imports use alias paths
- [ ] Build passes without errors
- [ ] Lint warnings addressed

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-10-12 | Initial brand guide created |

---

**Questions?** Contact TD Studios Design Team
**File Location**: `docs/BRAND_GUIDE.md`
