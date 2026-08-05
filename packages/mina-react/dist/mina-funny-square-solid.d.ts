import React from 'react';

export interface MinaFunnySquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFunnySquareSolid(props: MinaFunnySquareSolidProps): React.ReactElement;
export default MinaFunnySquareSolid;
