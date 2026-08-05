import React from 'react';

export interface MinaSunDimSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunDimSolid(props: MinaSunDimSolidProps): React.ReactElement;
export default MinaSunDimSolid;
