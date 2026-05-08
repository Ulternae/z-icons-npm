import React from 'react';

export interface MinaTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTriangle: React.FC<MinaTriangleProps>;
export default MinaTriangle;
