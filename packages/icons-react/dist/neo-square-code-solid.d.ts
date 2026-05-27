import React from 'react';

export interface NeoSquareCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSquareCodeSolid: React.FC<NeoSquareCodeSolidProps>;
export default NeoSquareCodeSolid;
