import React from 'react';

export interface LanEthernetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEthernet: React.FC<LanEthernetProps>;
export default LanEthernet;
