import React from 'react';

export interface LanOilCanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilCanSolid: React.FC<LanOilCanSolidProps>;
export default LanOilCanSolid;
