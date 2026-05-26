import React from 'react';

export interface LanMobileArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileArrowDown: React.FC<LanMobileArrowDownProps>;
export default LanMobileArrowDown;
