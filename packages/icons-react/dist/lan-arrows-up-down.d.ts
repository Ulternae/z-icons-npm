import React from 'react';

export interface LanArrowsUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsUpDown: React.FC<LanArrowsUpDownProps>;
export default LanArrowsUpDown;
