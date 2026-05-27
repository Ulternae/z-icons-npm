import React from 'react';

export interface NeoSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSquareSolid: React.FC<NeoSquareSolidProps>;
export default NeoSquareSolid;
