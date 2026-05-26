import React from 'react';

export interface LanMeterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterSolid: React.FC<LanMeterSolidProps>;
export default LanMeterSolid;
