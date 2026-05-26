import React from 'react';

export interface LanHandBackPointRibbonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandBackPointRibbonSolid: React.FC<LanHandBackPointRibbonSolidProps>;
export default LanHandBackPointRibbonSolid;
