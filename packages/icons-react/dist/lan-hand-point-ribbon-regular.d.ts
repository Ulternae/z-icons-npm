import React from 'react';

export interface LanHandPointRibbonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointRibbonRegular: React.FC<LanHandPointRibbonRegularProps>;
export default LanHandPointRibbonRegular;
