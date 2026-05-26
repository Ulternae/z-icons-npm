import React from 'react';

export interface LanDryerAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDryerAltSolid: React.FC<LanDryerAltSolidProps>;
export default LanDryerAltSolid;
