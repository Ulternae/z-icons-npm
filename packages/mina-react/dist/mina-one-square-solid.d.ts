import React from 'react';

export interface MinaOneSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneSquareSolid(props: MinaOneSquareSolidProps): React.ReactElement;
export default MinaOneSquareSolid;
