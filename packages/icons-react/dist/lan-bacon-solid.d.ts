import React from 'react';

export interface LanBaconSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaconSolid: React.FC<LanBaconSolidProps>;
export default LanBaconSolid;
