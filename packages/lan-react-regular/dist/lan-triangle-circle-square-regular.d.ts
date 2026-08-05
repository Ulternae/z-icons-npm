import React from 'react';

export interface LanTriangleCircleSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleCircleSquareRegular(props: LanTriangleCircleSquareRegularProps): React.ReactElement;
export default LanTriangleCircleSquareRegular;
