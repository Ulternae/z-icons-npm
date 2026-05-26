import React from 'react';

export interface LanUserChefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserChef: React.FC<LanUserChefProps>;
export default LanUserChef;
