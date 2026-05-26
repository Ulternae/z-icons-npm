import React from 'react';

export interface LanUserChefThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserChefThin: React.FC<LanUserChefThinProps>;
export default LanUserChefThin;
