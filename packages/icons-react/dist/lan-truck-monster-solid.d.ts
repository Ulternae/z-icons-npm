import React from 'react';

export interface LanTruckMonsterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMonsterSolid: React.FC<LanTruckMonsterSolidProps>;
export default LanTruckMonsterSolid;
