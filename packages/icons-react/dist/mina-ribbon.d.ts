import React from 'react';

export interface MinaRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRibbon: React.FC<MinaRibbonProps>;
export default MinaRibbon;
