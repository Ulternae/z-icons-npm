import React from 'react';

export interface MinaCocktailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCocktailSolid: React.FC<MinaCocktailSolidProps>;
export default MinaCocktailSolid;
