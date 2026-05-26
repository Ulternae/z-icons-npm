import React from 'react';

export interface LanUserCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCheckThin: React.FC<LanUserCheckThinProps>;
export default LanUserCheckThin;
