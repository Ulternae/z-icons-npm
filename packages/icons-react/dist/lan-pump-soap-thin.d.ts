import React from 'react';

export interface LanPumpSoapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpSoapThin: React.FC<LanPumpSoapThinProps>;
export default LanPumpSoapThin;
