import React from 'react';

export interface MinaAmpersandSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAmpersandSquareSolid(props: MinaAmpersandSquareSolidProps): React.ReactElement;
export default MinaAmpersandSquareSolid;
