import React from 'react';

export interface MinaSixSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixSquareSolid(props: MinaSixSquareSolidProps): React.ReactElement;
export default MinaSixSquareSolid;
