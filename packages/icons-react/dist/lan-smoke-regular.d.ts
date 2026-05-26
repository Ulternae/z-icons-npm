import React from 'react';

export interface LanSmokeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmokeRegular: React.FC<LanSmokeRegularProps>;
export default LanSmokeRegular;
