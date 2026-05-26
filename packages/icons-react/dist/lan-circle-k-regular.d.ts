import React from 'react';

export interface LanCircleKRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleKRegular: React.FC<LanCircleKRegularProps>;
export default LanCircleKRegular;
