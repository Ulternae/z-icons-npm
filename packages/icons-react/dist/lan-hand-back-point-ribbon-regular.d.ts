import React from 'react';

export interface LanHandBackPointRibbonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandBackPointRibbonRegular: React.FC<LanHandBackPointRibbonRegularProps>;
export default LanHandBackPointRibbonRegular;
