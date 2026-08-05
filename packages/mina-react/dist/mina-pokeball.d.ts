import React from 'react';

export interface MinaPokeballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPokeball(props: MinaPokeballProps): React.ReactElement;
export default MinaPokeball;
