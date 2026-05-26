import React from 'react';

export interface LanCowbellCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowbellCirclePlusRegular: React.FC<LanCowbellCirclePlusRegularProps>;
export default LanCowbellCirclePlusRegular;
