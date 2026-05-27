import React from 'react';

export interface NeoTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTriangle: React.FC<NeoTriangleProps>;
export default NeoTriangle;
