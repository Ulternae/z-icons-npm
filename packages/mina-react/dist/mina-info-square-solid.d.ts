import React from 'react';

export interface MinaInfoSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoSquareSolid(props: MinaInfoSquareSolidProps): React.ReactElement;
export default MinaInfoSquareSolid;
