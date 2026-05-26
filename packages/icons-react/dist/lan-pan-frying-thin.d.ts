import React from 'react';

export interface LanPanFryingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanFryingThin: React.FC<LanPanFryingThinProps>;
export default LanPanFryingThin;
