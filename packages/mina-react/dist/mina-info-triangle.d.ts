import React from 'react';

export interface MinaInfoTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoTriangle(props: MinaInfoTriangleProps): React.ReactElement;
export default MinaInfoTriangle;
