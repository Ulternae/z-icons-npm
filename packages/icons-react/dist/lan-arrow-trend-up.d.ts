import React from 'react';

export interface LanArrowTrendUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowTrendUp: React.FC<LanArrowTrendUpProps>;
export default LanArrowTrendUp;
