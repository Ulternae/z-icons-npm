import React from 'react';

export interface MinaHashSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashSquareSolid(props: MinaHashSquareSolidProps): React.ReactElement;
export default MinaHashSquareSolid;
