import React from 'react';

export interface LanRocketVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketVerticalRegular: React.FC<LanRocketVerticalRegularProps>;
export default LanRocketVerticalRegular;
