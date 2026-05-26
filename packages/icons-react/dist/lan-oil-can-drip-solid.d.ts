import React from 'react';

export interface LanOilCanDripSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilCanDripSolid: React.FC<LanOilCanDripSolidProps>;
export default LanOilCanDripSolid;
