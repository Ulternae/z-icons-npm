import React from 'react';

export interface LanChevronCircleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronCircleDown: React.FC<LanChevronCircleDownProps>;
export default LanChevronCircleDown;
