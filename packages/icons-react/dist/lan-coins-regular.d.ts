import React from 'react';

export interface LanCoinsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinsRegular: React.FC<LanCoinsRegularProps>;
export default LanCoinsRegular;
