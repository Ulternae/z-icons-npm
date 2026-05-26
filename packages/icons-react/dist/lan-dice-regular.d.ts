import React from 'react';

export interface LanDiceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceRegular: React.FC<LanDiceRegularProps>;
export default LanDiceRegular;
