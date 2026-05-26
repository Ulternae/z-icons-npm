import React from 'react';

export interface LanRibbonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRibbonRegular: React.FC<LanRibbonRegularProps>;
export default LanRibbonRegular;
