import React from 'react';

export interface LanPeriodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeriodRegular: React.FC<LanPeriodRegularProps>;
export default LanPeriodRegular;
