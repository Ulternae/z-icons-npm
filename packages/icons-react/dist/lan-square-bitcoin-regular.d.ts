import React from 'react';

export interface LanSquareBitcoinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBitcoinRegular: React.FC<LanSquareBitcoinRegularProps>;
export default LanSquareBitcoinRegular;
