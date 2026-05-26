import React from 'react';

export interface LanFlorinSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlorinSignRegular: React.FC<LanFlorinSignRegularProps>;
export default LanFlorinSignRegular;
