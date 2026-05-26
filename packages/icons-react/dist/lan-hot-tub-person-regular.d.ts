import React from 'react';

export interface LanHotTubPersonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotTubPersonRegular: React.FC<LanHotTubPersonRegularProps>;
export default LanHotTubPersonRegular;
