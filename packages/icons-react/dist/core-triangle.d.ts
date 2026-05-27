import React from 'react';

export interface CoreTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTriangle: React.FC<CoreTriangleProps>;
export default CoreTriangle;
