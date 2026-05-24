import React from 'react';

export interface BruNutritionixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNutritionix: React.FC<BruNutritionixProps>;
export default BruNutritionix;
