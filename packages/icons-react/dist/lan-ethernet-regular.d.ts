import React from 'react';

export interface LanEthernetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEthernetRegular: React.FC<LanEthernetRegularProps>;
export default LanEthernetRegular;
