import React from 'react';

export interface LanDRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDRegular: React.FC<LanDRegularProps>;
export default LanDRegular;
