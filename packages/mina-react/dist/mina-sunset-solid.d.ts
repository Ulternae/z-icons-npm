import React from 'react';

export interface MinaSunsetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunsetSolid(props: MinaSunsetSolidProps): React.ReactElement;
export default MinaSunsetSolid;
