import React from 'react';

export interface LanPumpSoapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpSoapRegular: React.FC<LanPumpSoapRegularProps>;
export default LanPumpSoapRegular;
