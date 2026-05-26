import React from 'react';

export interface LanTabletButtonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletButtonThin: React.FC<LanTabletButtonThinProps>;
export default LanTabletButtonThin;
