import React from 'react';

export interface LanCarBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBoltSolid: React.FC<LanCarBoltSolidProps>;
export default LanCarBoltSolid;
