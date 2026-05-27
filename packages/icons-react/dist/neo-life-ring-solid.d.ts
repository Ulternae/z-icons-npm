import React from 'react';

export interface NeoLifeRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLifeRingSolid: React.FC<NeoLifeRingSolidProps>;
export default NeoLifeRingSolid;
