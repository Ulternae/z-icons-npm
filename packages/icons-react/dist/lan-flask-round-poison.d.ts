import React from 'react';

export interface LanFlaskRoundPoisonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskRoundPoison: React.FC<LanFlaskRoundPoisonProps>;
export default LanFlaskRoundPoison;
