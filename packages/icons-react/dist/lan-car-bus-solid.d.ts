import React from 'react';

export interface LanCarBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBusSolid: React.FC<LanCarBusSolidProps>;
export default LanCarBusSolid;
