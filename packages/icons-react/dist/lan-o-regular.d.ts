import React from 'react';

export interface LanORegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanORegular: React.FC<LanORegularProps>;
export default LanORegular;
