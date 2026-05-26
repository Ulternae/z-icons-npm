import React from 'react';

export interface LanBeerMugEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeerMugEmptySolid: React.FC<LanBeerMugEmptySolidProps>;
export default LanBeerMugEmptySolid;
