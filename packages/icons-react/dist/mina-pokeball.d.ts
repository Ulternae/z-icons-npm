import React from 'react';

export interface MinaPokeballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPokeball: React.FC<MinaPokeballProps>;
export default MinaPokeball;
