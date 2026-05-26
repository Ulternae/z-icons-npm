import React from 'react';

export interface LanLeafHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafHeartRegular: React.FC<LanLeafHeartRegularProps>;
export default LanLeafHeartRegular;
