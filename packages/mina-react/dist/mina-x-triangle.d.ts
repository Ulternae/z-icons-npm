import React from 'react';

export interface MinaXTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXTriangle(props: MinaXTriangleProps): React.ReactElement;
export default MinaXTriangle;
