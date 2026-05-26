import React from 'react';

export interface LanYenSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYenSignRegular: React.FC<LanYenSignRegularProps>;
export default LanYenSignRegular;
