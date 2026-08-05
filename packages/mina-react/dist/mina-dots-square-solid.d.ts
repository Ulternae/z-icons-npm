import React from 'react';

export interface MinaDotsSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsSquareSolid(props: MinaDotsSquareSolidProps): React.ReactElement;
export default MinaDotsSquareSolid;
