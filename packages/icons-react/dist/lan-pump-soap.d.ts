import React from 'react';

export interface LanPumpSoapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpSoap: React.FC<LanPumpSoapProps>;
export default LanPumpSoap;
