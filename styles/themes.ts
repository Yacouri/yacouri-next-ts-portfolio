export interface IThemeProps {
  body: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  palette: any;
}

const lightMode: IThemeProps = {
  body: '#FEFEFE',
  text: {
    primary: '#000000',
    secondary: '#FFFFFF',
    muted: '#696767'
  },
  palette: {
    white: '#FEFEFE',
    blue: { '400': '#006EF0', '600': '0056BC' },
    black: { '400': '#393939', '600': '000000' },
    green: { '400': '#CFFFC4', '600': '83FF9E' },
    red: { '400': '#FF8F8F', '600': 'FE5A5A' }
  }
};

const darkMode: IThemeProps = {
  body: '#000000',
  text: {
    primary: '#FFFFFF',
    secondary: '#000000',
    muted: '#696767'
  },
  palette: {
    white: '#FEFEFE',
    blue: { '400': '#006EF0', '600': '0056BC' },
    black: { '400': '#393939', '600': '000000' },
    green: { '400': '#CFFFC4', '600': '83FF9E' },
    red: { '400': '#FF8F8F', '600': 'FE5A5A' }
  }
};

export { lightMode, darkMode };
