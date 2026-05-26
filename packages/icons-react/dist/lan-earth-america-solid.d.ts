import React from 'react';

export interface LanEarthAmericaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthAmericaSolid: React.FC<LanEarthAmericaSolidProps>;
export default LanEarthAmericaSolid;
