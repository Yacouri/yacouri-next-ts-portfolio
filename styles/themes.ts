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
    blue: {
      '400': '#006EF0',
      '600': '#0056BC',
      gradient: 'linear-gradient(180deg, #006EF0 0%, #0056BC 100%)'
    },
    black: {
      '400': '#393939',
      '600': '#000000',
      gradient: 'linear-gradient(180deg, #393939 0%, #000000 100%)'
    },
    green: {
      '400': '#CFFFC4',
      '600': '#83FF9E',
      gradient: 'linear-gradient(180deg, #CFFFC4 0%, #83FF9E 100%)'
    },
    red: { '400': '#FF8F8F', '600': '#FE5A5A' },
    menu: 'rgba(255,255,255, 0.5)'
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
    blue: {
      '400': '#006EF0',
      '600': '#0056BC',
      gradient: 'linear-gradient(180deg, #006EF0 0%, #0056BC 100%)'
    },
    black: {
      '400': '#393939',
      '600': '#000000',
      gradient: 'linear-gradient(180deg, #393939 0%, #000000 100%)'
    },
    green: {
      '400': '#CFFFC4',
      '600': '#83FF9E',
      gradient: 'linear-gradient(180deg, #CFFFC4 0%, #83FF9E 100%)'
    },
    red: { '400': '#FF8F8F', '600': '#FE5A5A' },
    menu: 'rgba(0,0,0, 0.5)'
  }
};

export { lightMode, darkMode };
