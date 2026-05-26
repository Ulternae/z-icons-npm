import React from 'react';

export interface LanArrowUpArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUpArrowDown: React.FC<LanArrowUpArrowDownProps>;
export default LanArrowUpArrowDown;
