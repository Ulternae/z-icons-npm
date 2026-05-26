import React from 'react';

export interface LanMoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonRegular: React.FC<LanMoonRegularProps>;
export default LanMoonRegular;
