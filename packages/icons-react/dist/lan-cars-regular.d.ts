import React from 'react';

export interface LanCarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarsRegular: React.FC<LanCarsRegularProps>;
export default LanCarsRegular;
