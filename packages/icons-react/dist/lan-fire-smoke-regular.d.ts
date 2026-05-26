import React from 'react';

export interface LanFireSmokeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireSmokeRegular: React.FC<LanFireSmokeRegularProps>;
export default LanFireSmokeRegular;
