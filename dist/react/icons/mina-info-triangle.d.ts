import React from 'react';

export interface MinaInfoTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoTriangle: React.FC<MinaInfoTriangleProps>;
export default MinaInfoTriangle;
