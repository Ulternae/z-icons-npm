import React from 'react';

export interface MinaXTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXTriangle: React.FC<MinaXTriangleProps>;
export default MinaXTriangle;
