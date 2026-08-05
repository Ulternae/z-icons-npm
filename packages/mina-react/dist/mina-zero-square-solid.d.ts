import React from 'react';

export interface MinaZeroSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroSquareSolid(props: MinaZeroSquareSolidProps): React.ReactElement;
export default MinaZeroSquareSolid;
