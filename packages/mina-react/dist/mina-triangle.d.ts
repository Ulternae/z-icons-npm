import React from 'react';

export interface MinaTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTriangle(props: MinaTriangleProps): React.ReactElement;
export default MinaTriangle;
