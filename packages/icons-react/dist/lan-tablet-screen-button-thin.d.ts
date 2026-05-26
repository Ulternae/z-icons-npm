import React from 'react';

export interface LanTabletScreenButtonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletScreenButtonThin: React.FC<LanTabletScreenButtonThinProps>;
export default LanTabletScreenButtonThin;
