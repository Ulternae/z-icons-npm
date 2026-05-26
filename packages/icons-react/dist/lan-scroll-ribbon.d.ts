import React from 'react';

export interface LanScrollRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollRibbon: React.FC<LanScrollRibbonProps>;
export default LanScrollRibbon;
