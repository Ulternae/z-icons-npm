import React from 'react';

export interface MinaEightSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightSquareSolid(props: MinaEightSquareSolidProps): React.ReactElement;
export default MinaEightSquareSolid;
