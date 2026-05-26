import React from 'react';

export interface LanHandBackPointRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandBackPointRibbonThin: React.FC<LanHandBackPointRibbonThinProps>;
export default LanHandBackPointRibbonThin;
