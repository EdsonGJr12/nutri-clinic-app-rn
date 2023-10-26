import { MD3LightTheme, configureFonts } from 'react-native-paper';
import fontConfig from './fontConfig';

export default {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#4ED9BF',
        secondary: '#fafafa',
        tertiary: '#212121',
        background: "#FAFAFA",
        backgroundCard: "#ffff"
    },
    fonts: configureFonts({ config: fontConfig })
};
