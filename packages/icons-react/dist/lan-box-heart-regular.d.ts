import React from 'react';

export interface LanBoxHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxHeartRegular: React.FC<LanBoxHeartRegularProps>;
export default LanBoxHeartRegular;
