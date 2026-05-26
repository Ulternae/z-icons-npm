import React from 'react';

export interface LanFlaskRoundPotionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskRoundPotionSolid: React.FC<LanFlaskRoundPotionSolidProps>;
export default LanFlaskRoundPotionSolid;
