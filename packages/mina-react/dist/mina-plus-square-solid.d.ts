import React from 'react';

export interface MinaPlusSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusSquareSolid(props: MinaPlusSquareSolidProps): React.ReactElement;
export default MinaPlusSquareSolid;
