import { defineZIconElement } from './create.js';
import { neoSprite } from '@zcorvus/icons/sprites/neo.js';
import { NeoAddressCard } from '@zcorvus/icons/svg/neo-address-card';
import { NeoAlarmClock } from '@zcorvus/icons/svg/neo-alarm-clock';
import { NeoAnchor } from '@zcorvus/icons/svg/neo-anchor';
import { NeoLanguage } from '@zcorvus/icons/svg/neo-language';
import { NeoMoon } from '@zcorvus/icons/svg/neo-moon';
import { NeoSun } from '@zcorvus/icons/svg/neo-sun';

export const neoIcons = {
  'address-card': NeoAddressCard,
  'alarm-clock': NeoAlarmClock,
  'anchor': NeoAnchor,
  'language': NeoLanguage,
  'moon': NeoMoon,
  'sun': NeoSun
};;

export { neoSprite } from '@zcorvus/icons/sprites/neo.js';
export const ZNeoSpriteElement = defineZIconElement('z-neo-sprite', { neo: { light: neoIcons } }, { type: 'neo', variant: 'light', defaultVariant: 'light', mode: 'sprite', spriteId: 'neo-light', sprite: neoSprite });
