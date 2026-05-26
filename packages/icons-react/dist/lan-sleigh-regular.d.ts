import React from 'react';

export interface LanSleighRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSleighRegular: React.FC<LanSleighRegularProps>;
export default LanSleighRegular;
