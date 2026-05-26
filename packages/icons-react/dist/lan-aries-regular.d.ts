import React from 'react';

export interface LanAriesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAriesRegular: React.FC<LanAriesRegularProps>;
export default LanAriesRegular;
