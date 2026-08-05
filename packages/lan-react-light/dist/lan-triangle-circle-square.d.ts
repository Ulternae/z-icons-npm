import React from 'react';

export interface LanTriangleCircleSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleCircleSquare(props: LanTriangleCircleSquareProps): React.ReactElement;
export default LanTriangleCircleSquare;
