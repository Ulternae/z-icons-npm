import React from 'react';

export interface LanRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRibbonThin: React.FC<LanRibbonThinProps>;
export default LanRibbonThin;
