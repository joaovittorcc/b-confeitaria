// Paleta e tokens extraídos de stitch-export/.../artesanal_elegance/DESIGN.md
// (tema "Artesanal Elegance" gerado pelo Stitch para este cliente — NÃO reaproveita
// a paleta de nenhum outro projeto do repositório).
//
// Nota: o borderRadius abaixo segue o DESIGN.md (sm 0.125rem … full 9999px).
// O tailwind.config INLINE dentro dos code.html do export trazia valores
// diferentes (DEFAULT 0.125rem, lg 0.25rem, xl 0.5rem, full 0.75rem — sem "sm"),
// divergentes do próprio DESIGN.md do Stitch para este cliente. Usamos o
// DESIGN.md como fonte da verdade, igual ao padrão já usado nos outros
// projetos do repositório.
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#fbf9f5",
        "surface-dim": "#dbdad6",
        "surface-bright": "#fbf9f5",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3ef",
        "surface-container": "#efeeea",
        "surface-container-high": "#eae8e4",
        "surface-container-highest": "#e4e2de",
        "on-surface": "#1b1c1a",
        "on-surface-variant": "#50453b",
        "inverse-surface": "#30312e",
        "inverse-on-surface": "#f2f0ed",
        "outline": "#82756a",
        "outline-variant": "#d4c4b7",
        "surface-tint": "#7d562d",
        "primary": "#7d562d",
        "on-primary": "#ffffff",
        "primary-container": "#d4a373",
        "on-primary-container": "#5b3912",
        "inverse-primary": "#f0bd8b",
        "secondary": "#715859",
        "on-secondary": "#ffffff",
        "secondary-container": "#f9d8d8",
        "on-secondary-container": "#765c5d",
        "tertiary": "#755750",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#c9a49c",
        "on-tertiary-container": "#553a34",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "primary-fixed": "#ffdcbd",
        "primary-fixed-dim": "#f0bd8b",
        "on-primary-fixed": "#2c1600",
        "on-primary-fixed-variant": "#623f18",
        "secondary-fixed": "#fcdbdb",
        "secondary-fixed-dim": "#dfbfbf",
        "on-secondary-fixed": "#291717",
        "on-secondary-fixed-variant": "#584141",
        "tertiary-fixed": "#ffdad2",
        "tertiary-fixed-dim": "#e5beb5",
        "on-tertiary-fixed": "#2b1611",
        "on-tertiary-fixed-variant": "#5c403a",
        "background": "#fbf9f5",
        "on-background": "#1b1c1a",
        "surface-variant": "#e4e2de"
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "base": "8px",
        "container-max": "1280px",
        "gutter": "24px",
        "section-gap-mobile": "64px",
        "section-gap-desktop": "120px"
      },
      fontFamily: {
        "display-lg": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  },
  plugins: []
};
