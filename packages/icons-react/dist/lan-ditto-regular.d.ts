import React from 'react';

export interface LanDittoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDittoRegular: React.FC<LanDittoRegularProps>;
export default LanDittoRegular;
