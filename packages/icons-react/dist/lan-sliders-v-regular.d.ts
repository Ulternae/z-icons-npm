import React from 'react';

export interface LanSlidersVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersVRegular: React.FC<LanSlidersVRegularProps>;
export default LanSlidersVRegular;
