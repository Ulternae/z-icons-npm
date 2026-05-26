import React from 'react';

export interface LanEarthAsiaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthAsiaSolid: React.FC<LanEarthAsiaSolidProps>;
export default LanEarthAsiaSolid;
