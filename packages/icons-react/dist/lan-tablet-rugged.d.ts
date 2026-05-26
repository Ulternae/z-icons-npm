import React from 'react';

export interface LanTabletRuggedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletRugged: React.FC<LanTabletRuggedProps>;
export default LanTabletRugged;
