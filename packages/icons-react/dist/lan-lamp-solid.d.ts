import React from 'react';

export interface LanLampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampSolid: React.FC<LanLampSolidProps>;
export default LanLampSolid;
