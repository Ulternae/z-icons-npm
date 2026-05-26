import React from 'react';

export interface LanBeerMugEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeerMugEmptyRegular: React.FC<LanBeerMugEmptyRegularProps>;
export default LanBeerMugEmptyRegular;
