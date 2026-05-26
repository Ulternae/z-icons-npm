import React from 'react';

export interface LanOutletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOutletSolid: React.FC<LanOutletSolidProps>;
export default LanOutletSolid;
