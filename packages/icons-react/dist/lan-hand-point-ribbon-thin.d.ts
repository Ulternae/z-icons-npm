import React from 'react';

export interface LanHandPointRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointRibbonThin: React.FC<LanHandPointRibbonThinProps>;
export default LanHandPointRibbonThin;
