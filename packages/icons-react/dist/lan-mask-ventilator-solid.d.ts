import React from 'react';

export interface LanMaskVentilatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskVentilatorSolid: React.FC<LanMaskVentilatorSolidProps>;
export default LanMaskVentilatorSolid;
