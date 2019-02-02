import { configure } from 'enzyme';
import 'raf/polyfill';
import Adapter from 'enzyme-adapter-react-16';

global.window = {};
global.window.alert = (msg) => { console.log(`window.alert: ${msg}`); };
global.window.matchMedia = () => ({});
global.window.scrollTo = () => { };

global.XMLHttpRequest = undefined;
configure({ adapter: new Adapter() });
