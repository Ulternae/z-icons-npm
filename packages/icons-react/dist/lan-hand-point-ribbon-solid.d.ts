import React from 'react';

export interface LanHandPointRibbonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointRibbonSolid: React.FC<LanHandPointRibbonSolidProps>;
export default LanHandPointRibbonSolid;
