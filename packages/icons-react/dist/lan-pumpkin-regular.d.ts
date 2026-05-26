import React from 'react';

export interface LanPumpkinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpkinRegular: React.FC<LanPumpkinRegularProps>;
export default LanPumpkinRegular;
