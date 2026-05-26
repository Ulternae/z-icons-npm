import React from 'react';

export interface LanBeerMugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeerMugRegular: React.FC<LanBeerMugRegularProps>;
export default LanBeerMugRegular;
