import React from 'react';

export interface MinaSunSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunSnowSolid(props: MinaSunSnowSolidProps): React.ReactElement;
export default MinaSunSnowSolid;
