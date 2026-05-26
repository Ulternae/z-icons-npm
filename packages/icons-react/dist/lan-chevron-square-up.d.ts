import React from 'react';

export interface LanChevronSquareUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronSquareUp: React.FC<LanChevronSquareUpProps>;
export default LanChevronSquareUp;
