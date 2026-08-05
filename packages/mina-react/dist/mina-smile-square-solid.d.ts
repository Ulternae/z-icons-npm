import React from 'react';

export interface MinaSmileSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSmileSquareSolid(props: MinaSmileSquareSolidProps): React.ReactElement;
export default MinaSmileSquareSolid;
