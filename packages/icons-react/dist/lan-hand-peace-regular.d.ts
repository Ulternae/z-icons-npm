import React from 'react';

export interface LanHandPeaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPeaceRegular: React.FC<LanHandPeaceRegularProps>;
export default LanHandPeaceRegular;
