import React from 'react';

export interface LanSdCardsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSdCardsRegular: React.FC<LanSdCardsRegularProps>;
export default LanSdCardsRegular;
