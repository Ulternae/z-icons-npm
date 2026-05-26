import React from 'react';

export interface LanTriangleCircleSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleCircleSquareSolid: React.FC<LanTriangleCircleSquareSolidProps>;
export default LanTriangleCircleSquareSolid;
