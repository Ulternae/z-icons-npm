import React from 'react';

export interface LanPumpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpRegular: React.FC<LanPumpRegularProps>;
export default LanPumpRegular;
