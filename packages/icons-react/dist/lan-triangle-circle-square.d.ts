import React from 'react';

export interface LanTriangleCircleSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleCircleSquare: React.FC<LanTriangleCircleSquareProps>;
export default LanTriangleCircleSquare;
