import React from 'react';

export interface LanHandBackPointRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandBackPointRibbon: React.FC<LanHandBackPointRibbonProps>;
export default LanHandBackPointRibbon;
