import React from 'react';

export interface LanUserPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPlus: React.FC<LanUserPlusProps>;
export default LanUserPlus;
