import React from 'react';

export interface LanSlidersHRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersHRegular: React.FC<LanSlidersHRegularProps>;
export default LanSlidersHRegular;
