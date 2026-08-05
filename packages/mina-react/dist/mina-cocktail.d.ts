import React from 'react';

export interface MinaCocktailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCocktail(props: MinaCocktailProps): React.ReactElement;
export default MinaCocktail;
