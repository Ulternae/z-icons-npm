import React from 'react';

export interface LanScrollRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollRibbonThin: React.FC<LanScrollRibbonThinProps>;
export default LanScrollRibbonThin;
