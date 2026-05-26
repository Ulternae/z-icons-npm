import React from 'react';

export interface LanTransporter3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporter3Thin: React.FC<LanTransporter3ThinProps>;
export default LanTransporter3Thin;
