import React from 'react';

export interface NeoBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBoxSolid: React.FC<NeoBoxSolidProps>;
export default NeoBoxSolid;
