import React from 'react';

export interface MinaPokeballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPokeballSolid: React.FC<MinaPokeballSolidProps>;
export default MinaPokeballSolid;
