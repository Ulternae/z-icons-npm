import React from 'react';

export interface LanCheeseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheeseSolid: React.FC<LanCheeseSolidProps>;
export default LanCheeseSolid;
