import React from 'react';

export interface LanRibbonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRibbonSolid: React.FC<LanRibbonSolidProps>;
export default LanRibbonSolid;
