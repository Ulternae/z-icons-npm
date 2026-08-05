import React from 'react';

export interface MinaAsteriskSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskSquareSolid(props: MinaAsteriskSquareSolidProps): React.ReactElement;
export default MinaAsteriskSquareSolid;
