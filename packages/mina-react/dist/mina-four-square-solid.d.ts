import React from 'react';

export interface MinaFourSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourSquareSolid(props: MinaFourSquareSolidProps): React.ReactElement;
export default MinaFourSquareSolid;
