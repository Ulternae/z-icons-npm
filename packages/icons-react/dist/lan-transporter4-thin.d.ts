import React from 'react';

export interface LanTransporter4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporter4Thin: React.FC<LanTransporter4ThinProps>;
export default LanTransporter4Thin;
