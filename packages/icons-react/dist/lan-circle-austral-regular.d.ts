import React from 'react';

export interface LanCircleAustralRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleAustralRegular: React.FC<LanCircleAustralRegularProps>;
export default LanCircleAustralRegular;
