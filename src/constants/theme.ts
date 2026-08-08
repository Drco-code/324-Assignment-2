export const colors = {
  primary: "#FF5C7A",
  primaryLight: "#FFE7EC",
  primaryDark: "#E94866",

  background: "#F8F8F8",
  surface: "#FFFFFF",
  surfaceSecondary: "#F3F3F3",

  text: "#171717",
  textSecondary: "#6B6B6B",
  textTertiary: "#999",
  textOnPrimary: "#FFFFFF",

  border: "#EAEAEA",
  divider: "#F0F0F0",

  success: "#4CAF50",
  successLight: "#E8F5E9",

  icon: "#171717",
  iconSecondary: "#777777",
  iconActive: "#FF5C7A",

  overlay: "rgba(0, 0, 0, 0.4)",
  overlayDark: "rgba(0, 0, 0, 0.6)", // fixed typo
} as const;

export const typography = {
  heading1: { fontSize: 28, fontWeight: "700" as const, lineHeight: 34 },
  heading2: { fontSize: 22, fontWeight: "700" as const, lineHeight: 28 },
  heading3: { fontSize: 18, fontWeight: "600" as const, lineHeight: 24 },
  body: { fontSize: 15, fontWeight: "400" as const, lineHeight: 22 },
  bodyMedium: { fontSize: 15, fontWeight: "500" as const, lineHeight: 22 },
  caption: { fontSize: 13, fontWeight: "400" as const, lineHeight: 18 },
  button: { fontSize: 16, fontWeight: "600" as const, lineHeight: 20 },
} as const;
