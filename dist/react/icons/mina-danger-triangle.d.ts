import React from 'react';

export interface MinaDangerTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerTriangle: React.FC<MinaDangerTriangleProps>;
export default MinaDangerTriangle;
