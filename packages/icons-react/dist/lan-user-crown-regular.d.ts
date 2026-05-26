import React from 'react';

export interface LanUserCrownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCrownRegular: React.FC<LanUserCrownRegularProps>;
export default LanUserCrownRegular;
