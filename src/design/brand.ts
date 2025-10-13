/**
 * TD Studios Brand Tokens
 * Version: 1.0
 * Last Updated: 2025-10-12
 *
 * Usage: Import and use these tokens in React components
 * Example: import { brand } from '@/design/brand'
 *          <div style={{ color: brand.colors.primary }}>
 */

export const brand = {
  /**
   * Color tokens - use CSS custom properties for runtime theming
   */
  colors: {
    // Primary brand colors
    primary: 'var(--brand-primary)',
    secondary: 'var(--brand-secondary)',
    accent: 'var(--brand-accent)',

    // Semantic colors
    success: 'var(--success)',
    warning: 'var(--warning)',
    error: 'var(--error)',
    info: 'var(--info)',

    // Neutral scale
    gray: {
      50: 'var(--gray-50)',
      100: 'var(--gray-100)',
      200: 'var(--gray-200)',
      300: 'var(--gray-300)',
      400: 'var(--gray-400)',
      500: 'var(--gray-500)',
      600: 'var(--gray-600)',
      700: 'var(--gray-700)',
      800: 'var(--gray-800)',
      900: 'var(--gray-900)',
    },

    // Text colors
    text: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
      tertiary: 'var(--text-tertiary)',
      disabled: 'var(--text-disabled)',
      inverse: 'var(--text-inverse)',
    },

    // Background colors
    background: 'var(--background)',
    surface: 'var(--surface)',
    surfaceElevated: 'var(--surface-elevated)',
    overlay: 'var(--overlay)',

    // Glassmorphism
    glass: {
      background: 'var(--glass-background)',
      backgroundDark: 'var(--glass-background-dark)',
      border: 'var(--glass-border)',
      blur: 'var(--glass-blur)',
    },
  },

  /**
   * Typography tokens
   */
  typography: {
    // Font families
    family: {
      primary: 'var(--font-primary)',
      display: 'var(--font-display)',
      mono: 'var(--font-mono)',
    },

    // Font sizes
    size: {
      display: 'var(--font-size-display)', // 56px
      h1: 'var(--font-size-h1)',          // 40px
      h2: 'var(--font-size-h2)',          // 32px
      h3: 'var(--font-size-h3)',          // 24px
      body: 'var(--font-size-body)',       // 16px
      small: 'var(--font-size-small)',     // 14px
      caption: 'var(--font-size-caption)', // 12px
    },

    // Line heights
    lineHeight: {
      display: 'var(--line-height-display)', // 1.1
      h1: 'var(--line-height-h1)',          // 1.2
      h2: 'var(--line-height-h2)',          // 1.25
      h3: 'var(--line-height-h3)',          // 1.33
      body: 'var(--line-height-body)',       // 1.5
      small: 'var(--line-height-small)',     // 1.5
      caption: 'var(--line-height-caption)', // 1.4
    },

    // Font weights
    weight: {
      regular: 'var(--font-weight-regular)', // 400
      medium: 'var(--font-weight-medium)',   // 500
      bold: 'var(--font-weight-bold)',       // 700
    },
  },

  /**
   * Spacing scale - use for margins, padding, gaps
   */
  spacing: {
    0: 'var(--space-0)',   // 0
    1: 'var(--space-1)',   // 4px
    2: 'var(--space-2)',   // 8px
    3: 'var(--space-3)',   // 12px
    4: 'var(--space-4)',   // 16px
    5: 'var(--space-5)',   // 24px
    6: 'var(--space-6)',   // 32px
    7: 'var(--space-7)',   // 48px
    8: 'var(--space-8)',   // 64px
    9: 'var(--space-9)',   // 96px
    10: 'var(--space-10)', // 128px
  },

  /**
   * Border radius tokens
   */
  radius: {
    none: 'var(--radius-none)', // 0
    sm: 'var(--radius-sm)',     // 4px
    md: 'var(--radius-md)',     // 8px
    lg: 'var(--radius-lg)',     // 16px
    xl: 'var(--radius-xl)',     // 24px
    full: 'var(--radius-full)', // 9999px
  },

  /**
   * Shadow tokens
   */
  shadows: {
    none: 'var(--shadow-none)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
    glass: 'var(--shadow-glass)',
    glassSm: 'var(--shadow-glass-sm)',
  },

  /**
   * Z-index scale - maintain stacking order
   */
  zIndex: {
    base: 'var(--z-base)',           // 0
    dropdown: 'var(--z-dropdown)',   // 1000
    sticky: 'var(--z-sticky)',       // 1020
    fixed: 'var(--z-fixed)',         // 1030
    modalBackdrop: 'var(--z-modal-backdrop)', // 1040
    modal: 'var(--z-modal)',         // 1050
    popover: 'var(--z-popover)',     // 1060
    tooltip: 'var(--z-tooltip)',     // 1070
    notification: 'var(--z-notification)', // 1080
  },

  /**
   * Transition tokens
   */
  transitions: {
    // Durations
    duration: {
      instant: 'var(--duration-instant)', // 0ms
      fast: 'var(--duration-fast)',       // 150ms
      normal: 'var(--duration-normal)',   // 300ms
      slow: 'var(--duration-slow)',       // 500ms
    },

    // Easing functions
    easing: {
      in: 'var(--ease-in)',
      out: 'var(--ease-out)',
      inOut: 'var(--ease-in-out)',
      bounce: 'var(--ease-bounce)',
    },
  },

  /**
   * Component-specific tokens
   */
  components: {
    button: {
      height: {
        sm: 'var(--button-height-sm)', // 32px
        md: 'var(--button-height-md)', // 40px
        lg: 'var(--button-height-lg)', // 48px
      },
      padding: {
        sm: 'var(--button-padding-sm)',
        md: 'var(--button-padding-md)',
        lg: 'var(--button-padding-lg)',
      },
    },

    input: {
      height: 'var(--input-height)', // 40px
      padding: 'var(--input-padding)',
      border: 'var(--input-border)',
      borderFocus: 'var(--input-border-focus)',
    },

    card: {
      padding: 'var(--card-padding)',    // 24px
      radius: 'var(--card-radius)',      // 16px
      shadow: 'var(--card-shadow)',
      shadowHover: 'var(--card-shadow-hover)',
    },

    container: {
      maxWidth: 'var(--container-max-width)', // 1280px
      padding: 'var(--container-padding)',    // 16px
    },
  },
} as const;

/**
 * Type-safe helper for accessing tokens
 */
export type BrandTokens = typeof brand;

/**
 * Utility function to apply multiple brand tokens as inline styles
 *
 * @example
 * const cardStyles = applyTokens({
 *   padding: brand.spacing[6],
 *   borderRadius: brand.radius.lg,
 *   boxShadow: brand.shadows.md,
 * });
 */
export function applyTokens(tokens: Record<string, string>): React.CSSProperties {
  return tokens as React.CSSProperties;
}

/**
 * Predefined style objects for common patterns
 */
export const brandStyles = {
  /**
   * Glassmorphism card effect
   */
  glassCard: {
    background: brand.colors.glass.background,
    backdropFilter: `blur(${brand.colors.glass.blur})`,
    border: `1px solid ${brand.colors.glass.border}`,
    boxShadow: brand.shadows.glass,
  },

  /**
   * Standard card
   */
  card: {
    padding: brand.components.card.padding,
    borderRadius: brand.components.card.radius,
    boxShadow: brand.components.card.shadow,
    background: brand.colors.surface,
  },

  /**
   * Container with max width
   */
  container: {
    maxWidth: brand.components.container.maxWidth,
    padding: brand.components.container.padding,
    margin: '0 auto',
  },

  /**
   * Smooth transition for hover effects
   */
  transition: {
    transition: `all ${brand.transitions.duration.normal} ${brand.transitions.easing.out}`,
  },
} as const;

export default brand;
