import React from 'react';

export interface LanImageCircleArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageCircleArrowDown: React.FC<LanImageCircleArrowDownProps>;
export default LanImageCircleArrowDown;
