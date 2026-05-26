import React from 'react';

export interface LanWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaterSolid: React.FC<LanWaterSolidProps>;
export default LanWaterSolid;
