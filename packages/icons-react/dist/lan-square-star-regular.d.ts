import React from 'react';

export interface LanSquareStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareStarRegular: React.FC<LanSquareStarRegularProps>;
export default LanSquareStarRegular;
