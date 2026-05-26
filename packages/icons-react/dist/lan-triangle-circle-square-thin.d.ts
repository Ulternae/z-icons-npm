import React from 'react';

export interface LanTriangleCircleSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleCircleSquareThin: React.FC<LanTriangleCircleSquareThinProps>;
export default LanTriangleCircleSquareThin;
