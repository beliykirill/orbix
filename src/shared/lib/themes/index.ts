import { DefaultTheme } from 'styled-components';
import { theme } from 'styled-tools';

export const color = (name: keyof DefaultTheme) => theme(name);

export { defaultTheme } from './theme';
