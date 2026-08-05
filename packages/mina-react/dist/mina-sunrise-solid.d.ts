import React from 'react';

export interface MinaSunriseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunriseSolid(props: MinaSunriseSolidProps): React.ReactElement;
export default MinaSunriseSolid;
