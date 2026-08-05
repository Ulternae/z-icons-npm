import React from 'react';

export interface MinaSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunSolid(props: MinaSunSolidProps): React.ReactElement;
export default MinaSunSolid;
