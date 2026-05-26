import React from 'react';

export interface LanCakeCandlesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCakeCandlesRegular: React.FC<LanCakeCandlesRegularProps>;
export default LanCakeCandlesRegular;
