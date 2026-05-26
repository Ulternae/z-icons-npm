import React from 'react';

export interface LanVanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVanThin: React.FC<LanVanThinProps>;
export default LanVanThin;
