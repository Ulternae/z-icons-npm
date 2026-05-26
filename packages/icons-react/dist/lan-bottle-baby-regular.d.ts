import React from 'react';

export interface LanBottleBabyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleBabyRegular: React.FC<LanBottleBabyRegularProps>;
export default LanBottleBabyRegular;
