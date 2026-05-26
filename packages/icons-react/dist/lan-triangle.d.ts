import React from 'react';

export interface LanTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangle: React.FC<LanTriangleProps>;
export default LanTriangle;
