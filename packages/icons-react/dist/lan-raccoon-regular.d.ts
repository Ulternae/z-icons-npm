import React from 'react';

export interface LanRaccoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaccoonRegular: React.FC<LanRaccoonRegularProps>;
export default LanRaccoonRegular;
