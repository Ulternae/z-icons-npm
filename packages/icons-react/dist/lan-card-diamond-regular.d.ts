import React from 'react';

export interface LanCardDiamondRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardDiamondRegular: React.FC<LanCardDiamondRegularProps>;
export default LanCardDiamondRegular;
