import React from 'react';

export interface LanSunAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunAltThin: React.FC<LanSunAltThinProps>;
export default LanSunAltThin;
