import React from 'react';

export interface MinaEuroSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroSquareSolid(props: MinaEuroSquareSolidProps): React.ReactElement;
export default MinaEuroSquareSolid;
