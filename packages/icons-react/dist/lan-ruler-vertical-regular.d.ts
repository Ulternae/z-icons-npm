import React from 'react';

export interface LanRulerVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerVerticalRegular: React.FC<LanRulerVerticalRegularProps>;
export default LanRulerVerticalRegular;
