import React from 'react';

export interface LanCircleBitcoinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBitcoinRegular: React.FC<LanCircleBitcoinRegularProps>;
export default LanCircleBitcoinRegular;
