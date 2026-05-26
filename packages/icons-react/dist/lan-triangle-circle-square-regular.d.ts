import React from 'react';

export interface LanTriangleCircleSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleCircleSquareRegular: React.FC<LanTriangleCircleSquareRegularProps>;
export default LanTriangleCircleSquareRegular;
