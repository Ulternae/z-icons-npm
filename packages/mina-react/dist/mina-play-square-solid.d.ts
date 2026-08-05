import React from 'react';

export interface MinaPlaySquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlaySquareSolid(props: MinaPlaySquareSolidProps): React.ReactElement;
export default MinaPlaySquareSolid;
