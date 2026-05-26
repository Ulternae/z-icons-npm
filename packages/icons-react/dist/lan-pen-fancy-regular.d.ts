import React from 'react';

export interface LanPenFancyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFancyRegular: React.FC<LanPenFancyRegularProps>;
export default LanPenFancyRegular;
