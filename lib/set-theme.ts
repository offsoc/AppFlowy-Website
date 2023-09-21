import { Storage } from '@/lib/storage';
import { setCookie } from '@/lib/cookie';

export function setTheme(dark: boolean) {
  setCookie('data-mode', dark ? 'dark' : 'light', 365);
  Storage.set('data-mode', dark ? 'dark' : 'light');
  if (dark) {
    document.documentElement.setAttribute('data-mode', 'dark');
  } else {
    document.documentElement.removeAttribute('data-mode');
  }
}
