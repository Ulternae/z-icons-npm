import React from 'react';

export interface LanMailForwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailForwardThin: React.FC<LanMailForwardThinProps>;
export default LanMailForwardThin;
