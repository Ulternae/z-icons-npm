import React from 'react';

export interface BruNutritionixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNutritionix(props: BruNutritionixProps): React.ReactElement;
export default BruNutritionix;
