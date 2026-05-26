import React from 'react';

export interface LanPumpSoapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpSoapSolid: React.FC<LanPumpSoapSolidProps>;
export default LanPumpSoapSolid;
