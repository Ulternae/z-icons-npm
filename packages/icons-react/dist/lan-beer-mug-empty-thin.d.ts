import React from 'react';

export interface LanBeerMugEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeerMugEmptyThin: React.FC<LanBeerMugEmptyThinProps>;
export default LanBeerMugEmptyThin;
