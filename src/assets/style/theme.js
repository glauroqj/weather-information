const Breakpoints = {
  xs: '640px',
  sm: '830px',
  md: '1100px',
  lg: '1500px'
}

const Colors = {
  c_main: '#e66760',
  c_main_dark: '#A64A46',
  c_secondary: '#8c88cd',
  c_secondary_dark: '#5F5D8C',
  c_third: '#DEA862',
  c_third_dark: '#C49556',
}

const Spaces = {
  0: '0',
  4: '4px',
  8: '8px',
  16: '16px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px'
}

const Fonts = {
  default: 'Roboto, sans-serif',
  secondary: 'Raleway, sans-serif'
}

const FontSize = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  24: '24px',
  32: '32px'
}

const FontWeight = {
  light: 300,
  normal: 400,
  medium: 600,
  bold: 700
}


/** THEME */
export const Theme = {
  space: Spaces,
  breakpoint: Breakpoints,
  color: Colors,
  typography: {
    fontFamily: Fonts,
    fontSize: FontSize,
    fontWeight: FontWeight,
  }
}