import React from 'react';

export interface LanMeterBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterBoltSolid: React.FC<LanMeterBoltSolidProps>;
export default LanMeterBoltSolid;
