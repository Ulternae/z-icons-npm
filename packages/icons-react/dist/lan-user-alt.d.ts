import React from 'react';

export interface LanUserAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserAlt: React.FC<LanUserAltProps>;
export default LanUserAlt;
