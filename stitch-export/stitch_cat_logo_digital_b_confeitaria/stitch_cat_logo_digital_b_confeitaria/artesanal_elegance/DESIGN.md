---
name: Artesanal Elegance
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#50453b'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#82756a'
  outline-variant: '#d4c4b7'
  surface-tint: '#7d562d'
  primary: '#7d562d'
  on-primary: '#ffffff'
  primary-container: '#d4a373'
  on-primary-container: '#5b3912'
  inverse-primary: '#f0bd8b'
  secondary: '#715859'
  on-secondary: '#ffffff'
  secondary-container: '#f9d8d8'
  on-secondary-container: '#765c5d'
  tertiary: '#755750'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a49c'
  on-tertiary-container: '#553a34'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#f0bd8b'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#623f18'
  secondary-fixed: '#fcdbdb'
  secondary-fixed-dim: '#dfbfbf'
  on-secondary-fixed: '#291717'
  on-secondary-fixed-variant: '#584141'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#e5beb5'
  on-tertiary-fixed: '#2b1611'
  on-tertiary-fixed-variant: '#5c403a'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system reflects the artisanal precision and feminine grace of high-end confectionery. It targets a discerning audience that values quality, tradition, and aesthetic beauty. The visual language balances **Minimalism** with **Tactile** flourishes, using generous whitespace to allow product photography to breathe while employing subtle textures to evoke the feel of premium parchment and gold leaf.

The emotional response should be one of "approachable luxury"—established and professional, yet warm and inviting, mirroring the atmosphere of a physical boutique bakery in Goiânia.

## Colors
The palette is rooted in the ingredients and heritage of the confectionery craft:
- **Primary (Gold Accent):** A muted, sophisticated gold used sparingly for highlights, icons, and interactive states.
- **Secondary (Pastel Pink):** A soft, dusty rose that provides a feminine touch without being overly sweet. Use for secondary buttons and decorative backgrounds.
- **Tertiary (Chocolate Brown):** A deep, rich brown used primarily for typography and structural elements to ensure readability and grounding.
- **Neutral (Warm Cream):** The foundation of the UI. Avoid pure white in favor of this cream tone to maintain a warm, artisanal feel.

## Typography
The typography pairing establishes an editorial, high-end feel. **Playfair Display** provides the artisanal signature, used for headings and pull-quotes to convey a sense of history and craftsmanship. **Plus Jakarta Sans** offers a contemporary, soft contrast for body copy, ensuring modern legibility on digital interfaces.

For mobile, reduce display sizes but maintain the high-contrast serif headers to preserve the brand identity. Labels should utilize increased letter spacing and uppercase styling to mimic the look of luxury product packaging tags.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop to maintain an editorial, magazine-like composition. 
- **Desktop:** 12-column grid, 1280px max-width, with 24px gutters.
- **Tablet:** 8-column grid with 32px side margins.
- **Mobile:** 4-column fluid grid with 20px side margins.

Use generous vertical spacing (Section Gaps) to create a sense of "calm luxury." Elements should be centered often to reinforce the boutique nature of the brand.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Ambient Shadows**. 
- **Surface Depth:** Use subtle shifts from the Cream neutral (#FFFDF9) to a slightly deeper Cream (#F9F5F0) to define containers.
- **Shadows:** Shadows must be extremely soft and diffused, using a hint of the Tertiary brown in the shadow color (e.g., `rgba(78, 52, 46, 0.08)`) rather than pure black. This mimics the soft lighting found in a high-end patisserie.
- **Interaction:** Upon hover, cards should lift slightly using a larger, more translucent shadow rather than a border change.

## Shapes
The shape language is **Soft**. Sharp edges are avoided to maintain a welcoming and feminine aesthetic, but excessive rounding (pill shapes) is avoided to keep the brand feeling "Established" and "Sophisticated" rather than "Casual." 

Corners should use a 0.25rem (4px) base radius, providing a refined finish that feels intentional and architectural.

## Components
- **Buttons:** Primary buttons use the Tertiary brown with Cream text for high authority. Secondary buttons use a Primary gold outline with transparent backgrounds. Labels should be uppercase with 0.05em tracking.
- **Cards:** Cards for menu items or blog posts should use a subtle Tonal Layer background. Images should always have a slight zoom-on-hover effect to emphasize the "artisanal" detail.
- **Input Fields:** Use a simple bottom-border only or a very light outline in the secondary pink. Focus states transition the border to the primary gold.
- **Chips/Tags:** Used for flavors or dietary notes (e.g., "Gluten Free"). These should use the Secondary pink background with Tertiary brown text.
- **Lists:** Use custom icons for list bullets—specifically a small gold stylized "B" or a simple dot in the primary gold color.
- **Specialty Component - "The Signature Divider":** A custom horizontal rule featuring a small gold-leaf ornament or the brand monogram in the center to separate sections.