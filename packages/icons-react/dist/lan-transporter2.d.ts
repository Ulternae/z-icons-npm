import React from 'react';

export interface LanTransporter2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransporter2: React.FC<LanTransporter2Props>;
export default LanTransporter2;
