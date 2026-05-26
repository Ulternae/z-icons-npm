import React from 'react';

export interface LanBeerMugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeerMugThin: React.FC<LanBeerMugThinProps>;
export default LanBeerMugThin;
