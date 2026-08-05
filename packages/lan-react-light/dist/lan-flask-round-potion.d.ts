import React from 'react';

export interface LanFlaskRoundPotionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskRoundPotion(props: LanFlaskRoundPotionProps): React.ReactElement;
export default LanFlaskRoundPotion;
