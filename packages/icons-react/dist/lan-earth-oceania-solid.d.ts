import React from 'react';

export interface LanEarthOceaniaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthOceaniaSolid: React.FC<LanEarthOceaniaSolidProps>;
export default LanEarthOceaniaSolid;
