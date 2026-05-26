import React from 'react';

export interface LanCrownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrownRegular: React.FC<LanCrownRegularProps>;
export default LanCrownRegular;
