import React from 'react';

export interface LanTaxiBusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTaxiBusRegular: React.FC<LanTaxiBusRegularProps>;
export default LanTaxiBusRegular;
