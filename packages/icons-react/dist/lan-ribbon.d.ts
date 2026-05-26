import React from 'react';

export interface LanRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRibbon: React.FC<LanRibbonProps>;
export default LanRibbon;
