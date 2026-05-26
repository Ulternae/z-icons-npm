import React from 'react';

export interface LanUpRightFromSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpRightFromSquare: React.FC<LanUpRightFromSquareProps>;
export default LanUpRightFromSquare;
