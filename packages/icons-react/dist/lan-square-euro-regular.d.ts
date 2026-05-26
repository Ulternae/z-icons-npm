import React from 'react';

export interface LanSquareEuroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEuroRegular: React.FC<LanSquareEuroRegularProps>;
export default LanSquareEuroRegular;
