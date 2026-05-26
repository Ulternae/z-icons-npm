import React from 'react';

export interface LanFlaskRoundPotionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskRoundPotion: React.FC<LanFlaskRoundPotionProps>;
export default LanFlaskRoundPotion;
