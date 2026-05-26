import React from 'react';

export interface LanCircleStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleStarRegular: React.FC<LanCircleStarRegularProps>;
export default LanCircleStarRegular;
