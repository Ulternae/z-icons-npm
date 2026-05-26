import React from 'react';

export interface LanDryerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDryerSolid: React.FC<LanDryerSolidProps>;
export default LanDryerSolid;
