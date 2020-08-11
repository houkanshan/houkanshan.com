import '../fonts/font-lora.css';
import '../fonts/font-arkyakumono.css';
import './global.css';

import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

export const sansSerifFont = `'arkyakumono','Avenir Next',
  "Helvetica Neue",Helvetica,
  "Lucida Grande","Luxi Sans", sans-serif`;
export const italicFont = `'LoraItalic',
  "Georgia Italic","Georgia-Italic",
  STKaiti,"AR PL UKai",
  "AR PL KaitiM GB",KaiTi,KaiTi_GB2312,"TW-Kai", serif`;

Wordpress2016.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  html: {
    fontFamily: sansSerifFont,
    fontSize: '18px',
    fontDisplay: 'swap',
  },
  body: {
    fontFamily: sansSerifFont,
  },
  a: {
    color: 'var(--textLink)',
    boxShadow: 'none',
  },
  'a[class]': {
    textDecoration: 'none',
  },
  hr: {
    background: 'var(--hr)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  // These two are for gatsby-remark-autolink-headers:
  'a.anchor': {
    boxShadow: 'none',
  },
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  'p code': {
    fontSize: '1rem',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 400,
    fontFamily: sansSerifFont,
  },
  // TODO: why tho
  'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
    fontSize: 'inherit',
  },
  'li code': {
    fontSize: '1rem',
  },
  'i, em': {
    fontFamily: italicFont,
  },
  blockquote: {
    color: 'inherit',
    borderLeftColor: 'inherit',
    opacity: '0.8',
  },
  'blockquote.translation': {
    fontSize: '1em',
  },
  '.post-article-content a, .extra-info a': {
    fontFamily: italicFont,
    textDecoration: 'underline',
    textDecorationSkipInk: 'auto',
  },
  '.gatsby-resp-image-figcaption': {
    textAlign: 'center',
    fontSize: '14px',
    marginTop: '5px',
    lineHeight: '1.2',
    fontFamily: italicFont,
  },
  '.page-index section > h2': {
    fontSize: rhythm(0.6),
  },
  'a:not(href)': {
    cursor: 'pointer',
  },
});

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
