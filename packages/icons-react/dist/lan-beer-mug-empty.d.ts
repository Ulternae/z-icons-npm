import React from 'react';

export interface LanBeerMugEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeerMugEmpty: React.FC<LanBeerMugEmptyProps>;
export default LanBeerMugEmpty;
