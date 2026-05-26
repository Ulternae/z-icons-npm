import React from 'react';

export interface LanTabletRuggedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletRuggedThin: React.FC<LanTabletRuggedThinProps>;
export default LanTabletRuggedThin;
