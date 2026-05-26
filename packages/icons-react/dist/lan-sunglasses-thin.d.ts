import React from 'react';

export interface LanSunglassesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunglassesThin: React.FC<LanSunglassesThinProps>;
export default LanSunglassesThin;
