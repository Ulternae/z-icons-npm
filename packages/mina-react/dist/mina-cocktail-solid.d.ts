import React from 'react';

export interface MinaCocktailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCocktailSolid(props: MinaCocktailSolidProps): React.ReactElement;
export default MinaCocktailSolid;
