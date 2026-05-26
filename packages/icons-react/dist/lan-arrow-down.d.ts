import React from 'react';

export interface LanArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDown: React.FC<LanArrowDownProps>;
export default LanArrowDown;
