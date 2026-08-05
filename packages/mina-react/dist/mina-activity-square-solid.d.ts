import React from 'react';

export interface MinaActivitySquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaActivitySquareSolid(props: MinaActivitySquareSolidProps): React.ReactElement;
export default MinaActivitySquareSolid;
