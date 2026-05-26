import React from 'react';

export interface LanPersonBurstRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBurstRegular: React.FC<LanPersonBurstRegularProps>;
export default LanPersonBurstRegular;
