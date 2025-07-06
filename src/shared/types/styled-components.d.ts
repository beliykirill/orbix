import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    surfaceBackground: string;
    surfaceBackgroundSecondary: string;
    surfaceBrand: string;

    textMain: string;
    textSecondary: string;
    textBrand: string;
    textPrice: string;
    textError: string;
  }
}
