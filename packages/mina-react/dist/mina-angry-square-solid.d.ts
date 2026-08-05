import React from 'react';

export interface MinaAngrySquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAngrySquareSolid(props: MinaAngrySquareSolidProps): React.ReactElement;
export default MinaAngrySquareSolid;
