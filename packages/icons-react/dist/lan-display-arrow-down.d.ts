import React from 'react';

export interface LanDisplayArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisplayArrowDown: React.FC<LanDisplayArrowDownProps>;
export default LanDisplayArrowDown;
