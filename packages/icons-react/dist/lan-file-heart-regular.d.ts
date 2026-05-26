import React from 'react';

export interface LanFileHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHeartRegular: React.FC<LanFileHeartRegularProps>;
export default LanFileHeartRegular;
