import React from 'react';

export interface CoreTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTriangle(props: CoreTriangleProps): React.ReactElement;
export default CoreTriangle;
