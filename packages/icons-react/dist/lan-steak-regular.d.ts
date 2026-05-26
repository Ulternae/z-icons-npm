import React from 'react';

export interface LanSteakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSteakRegular: React.FC<LanSteakRegularProps>;
export default LanSteakRegular;
