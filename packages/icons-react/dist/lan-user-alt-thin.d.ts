import React from 'react';

export interface LanUserAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAltThin: React.FC<LanUserAltThinProps>;
export default LanUserAltThin;
