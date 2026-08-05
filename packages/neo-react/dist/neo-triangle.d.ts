import React from 'react';

export interface NeoTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTriangle(props: NeoTriangleProps): React.ReactElement;
export default NeoTriangle;
