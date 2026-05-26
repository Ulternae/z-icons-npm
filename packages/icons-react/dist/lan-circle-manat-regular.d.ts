import React from 'react';

export interface LanCircleManatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleManatRegular: React.FC<LanCircleManatRegularProps>;
export default LanCircleManatRegular;
