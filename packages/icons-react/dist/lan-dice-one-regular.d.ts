import React from 'react';

export interface LanDiceOneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceOneRegular: React.FC<LanDiceOneRegularProps>;
export default LanDiceOneRegular;
