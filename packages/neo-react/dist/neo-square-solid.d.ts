import React from 'react';

export interface NeoSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSquareSolid(props: NeoSquareSolidProps): React.ReactElement;
export default NeoSquareSolid;
