// @flow
import platform from 'platform';
import util from './util';

const system = {};
try {
  console.log(platform);
  system.model = '';
  system.pixelRatio = window.devicePixelRatio;
  system.language = window.navigator.language;
  system.screenHeight = window.outerHeight;
  system.screenWidth = window.outerWidth;
  system.windowHeight = window.innerHeight;
  system.windowWidth = window.innerWidth;
  system.platform = window.navigator.platform;
  system.system = `${platform.os.family} ${platform.os.version}`;
  // system.SDKVersion = ''
  // system.SDKVersionCode = ''
  system.name = platform.name;
  system.version = platform.version;
} catch (e) {
  console.error(e);
}
console.info(system);

export default system;
