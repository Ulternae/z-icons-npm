import React from 'react';

export interface LanHeartRateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartRateRegular: React.FC<LanHeartRateRegularProps>;
export default LanHeartRateRegular;
