import React from 'react';

export interface LanEthernetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEthernetThin: React.FC<LanEthernetThinProps>;
export default LanEthernetThin;
