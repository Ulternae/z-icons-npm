import React from 'react';

export interface LanTransporter2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporter2Thin: React.FC<LanTransporter2ThinProps>;
export default LanTransporter2Thin;
