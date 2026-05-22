import { defineZIconElement } from './create.js';
import { coreSprite } from '@zcorvus/icons/sprites/core.js';
import { CoreAddressCard } from '@zcorvus/icons/svg/core-address-card';
import { CoreAlarmClock } from '@zcorvus/icons/svg/core-alarm-clock';
import { CoreAnchor } from '@zcorvus/icons/svg/core-anchor';
import { CoreLanguage } from '@zcorvus/icons/svg/core-language';
import { CoreMoon } from '@zcorvus/icons/svg/core-moon';
import { CoreSun } from '@zcorvus/icons/svg/core-sun';

export const coreIcons = {
  'address-card': CoreAddressCard,
  'alarm-clock': CoreAlarmClock,
  'anchor': CoreAnchor,
  'language': CoreLanguage,
  'moon': CoreMoon,
  'sun': CoreSun
};;

export { coreSprite } from '@zcorvus/icons/sprites/core.js';
export const ZCoreSpriteElement = defineZIconElement('z-core-sprite', { core: { light: coreIcons } }, { type: 'core', variant: 'light', defaultVariant: 'light', mode: 'sprite', spriteId: 'core-light', sprite: coreSprite });
