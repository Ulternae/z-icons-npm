import React from 'react';

export interface LanTriangleCircleSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleCircleSquareSolid(props: LanTriangleCircleSquareSolidProps): React.ReactElement;
export default LanTriangleCircleSquareSolid;
