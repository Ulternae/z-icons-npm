import React from 'react';

export interface LanMailForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailForward: React.FC<LanMailForwardProps>;
export default LanMailForward;
