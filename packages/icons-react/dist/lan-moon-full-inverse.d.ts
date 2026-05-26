import React from 'react';

export interface LanMoonFullInverseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonFullInverse: React.FC<LanMoonFullInverseProps>;
export default LanMoonFullInverse;
