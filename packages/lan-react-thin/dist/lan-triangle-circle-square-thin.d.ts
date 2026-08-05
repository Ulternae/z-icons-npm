import React from 'react';

export interface LanTriangleCircleSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleCircleSquareThin(props: LanTriangleCircleSquareThinProps): React.ReactElement;
export default LanTriangleCircleSquareThin;
