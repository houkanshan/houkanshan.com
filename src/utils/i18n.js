import { supportedLanguages } from './../../i18n';

// This is kind of a mess for some languages.
// Try to be as short as possible.
// Make sure you use a real code (e.g. "ja", not "jp").
// Some resources:
// http://www.rfc-editor.org/rfc/bcp/bcp47.txt
// https://www.w3.org/International/articles/language-tags/
// https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
// https://discuss.httparchive.org/t/what-are-the-invalid-uses-of-the-lang-attribute/1022

export const codeToLanguage = code =>
  supportedLanguages[code].replace(/ /g, ' ' /* nbsp */);

export const loadFontsForCode = code => {
  switch (code) {
    case 'ru':
    case 'bg':
    case 'uk':
    case 'cs':
    case 'da':
    case 'de':
    case 'es':
    case 'fi':
    case 'fr':
    case 'hu':
    case 'it':
    case 'nl':
    case 'no':
    case 'pl':
    case 'pt-br':
    case 'sk':
    case 'sr':
    case 'sq':
    case 'sv':
    case 'tr':
    case 'vi':
    case 'fa':
    case 'ar':
    default:
      break;
  }
};

// TODO: the curried signature is weird.
export const createLanguageLink = (slug, lang) => {
  const rawSlug = slug.replace(`${lang}/`, '');

  return targetLang =>
    targetLang === 'en' ? rawSlug : `/${targetLang}${rawSlug}`;
};
