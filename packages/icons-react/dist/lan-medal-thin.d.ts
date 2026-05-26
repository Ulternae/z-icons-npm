import React from 'react';

export interface LanMedalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMedalThin: React.FC<LanMedalThinProps>;
export default LanMedalThin;
