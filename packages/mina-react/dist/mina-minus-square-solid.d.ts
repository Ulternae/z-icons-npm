import React from 'react';

export interface MinaMinusSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusSquareSolid(props: MinaMinusSquareSolidProps): React.ReactElement;
export default MinaMinusSquareSolid;
