import React from 'react';

export interface LanBeerMugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeerMug: React.FC<LanBeerMugProps>;
export default LanBeerMug;
