import { createPackIcon } from './create-pack-icon.js';
import { NeoAddressCard } from '../neo-address-card.js';
import { NeoAlarmClock } from '../neo-alarm-clock.js';
import { NeoAnchor } from '../neo-anchor.js';
import { NeoLanguage } from '../neo-language.js';
import { NeoMoon } from '../neo-moon.js';
import { NeoSun } from '../neo-sun.js';

export const neoLightIconMap = {
  light: {
    'address-card': NeoAddressCard,
    'alarm-clock': NeoAlarmClock,
    'anchor': NeoAnchor,
    'language': NeoLanguage,
    'moon': NeoMoon,
    'sun': NeoSun
  }
};

export const ZNeo = createPackIcon(neoLightIconMap, 'light');
export default ZNeo;
