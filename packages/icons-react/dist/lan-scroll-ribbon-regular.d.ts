import React from 'react';

export interface LanScrollRibbonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollRibbonRegular: React.FC<LanScrollRibbonRegularProps>;
export default LanScrollRibbonRegular;
