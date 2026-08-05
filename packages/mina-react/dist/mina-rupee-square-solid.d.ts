import React from 'react';

export interface MinaRupeeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeSquareSolid(props: MinaRupeeSquareSolidProps): React.ReactElement;
export default MinaRupeeSquareSolid;
