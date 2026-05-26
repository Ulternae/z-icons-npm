import React from 'react';

export interface LanDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDotRegular: React.FC<LanDotRegularProps>;
export default LanDotRegular;
