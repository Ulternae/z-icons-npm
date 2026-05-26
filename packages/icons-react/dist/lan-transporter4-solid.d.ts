import React from 'react';

export interface LanTransporter4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporter4Solid: React.FC<LanTransporter4SolidProps>;
export default LanTransporter4Solid;
