import React from 'react';

export interface LanPercentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPercentRegular: React.FC<LanPercentRegularProps>;
export default LanPercentRegular;
