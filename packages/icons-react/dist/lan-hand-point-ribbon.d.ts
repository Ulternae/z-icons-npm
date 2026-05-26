import React from 'react';

export interface LanHandPointRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointRibbon: React.FC<LanHandPointRibbonProps>;
export default LanHandPointRibbon;
