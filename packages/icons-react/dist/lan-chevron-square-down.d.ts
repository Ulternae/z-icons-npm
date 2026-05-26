import React from 'react';

export interface LanChevronSquareDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronSquareDown: React.FC<LanChevronSquareDownProps>;
export default LanChevronSquareDown;
