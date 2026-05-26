import React from 'react';

export interface LanChevronSquareLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronSquareLeft: React.FC<LanChevronSquareLeftProps>;
export default LanChevronSquareLeft;
