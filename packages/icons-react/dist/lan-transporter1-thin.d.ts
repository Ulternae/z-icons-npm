import React from 'react';

export interface LanTransporter1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporter1Thin: React.FC<LanTransporter1ThinProps>;
export default LanTransporter1Thin;
