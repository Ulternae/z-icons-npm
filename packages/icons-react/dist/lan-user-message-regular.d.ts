import React from 'react';

export interface LanUserMessageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMessageRegular: React.FC<LanUserMessageRegularProps>;
export default LanUserMessageRegular;
