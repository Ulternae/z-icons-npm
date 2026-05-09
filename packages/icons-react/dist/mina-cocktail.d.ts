import React from 'react';

export interface MinaCocktailProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCocktail: React.FC<MinaCocktailProps>;
export default MinaCocktail;
