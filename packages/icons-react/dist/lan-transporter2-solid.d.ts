import React from 'react';

export interface LanTransporter2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporter2Solid: React.FC<LanTransporter2SolidProps>;
export default LanTransporter2Solid;
