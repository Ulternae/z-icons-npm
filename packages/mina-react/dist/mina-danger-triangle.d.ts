import React from 'react';

export interface MinaDangerTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerTriangle(props: MinaDangerTriangleProps): React.ReactElement;
export default MinaDangerTriangle;
