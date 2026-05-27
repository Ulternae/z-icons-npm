import React from 'react';

export interface NeoHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHandSolid: React.FC<NeoHandSolidProps>;
export default NeoHandSolid;
