import React from 'react';

export interface LanCancerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCancerRegular: React.FC<LanCancerRegularProps>;
export default LanCancerRegular;
