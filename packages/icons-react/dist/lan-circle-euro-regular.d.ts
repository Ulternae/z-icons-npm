import React from 'react';

export interface LanCircleEuroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEuroRegular: React.FC<LanCircleEuroRegularProps>;
export default LanCircleEuroRegular;
