import React from 'react';

export interface LanEthernetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEthernetSolid: React.FC<LanEthernetSolidProps>;
export default LanEthernetSolid;
