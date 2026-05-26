import React from 'react';

export interface LanSunDustRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunDustRegular: React.FC<LanSunDustRegularProps>;
export default LanSunDustRegular;
