import React from 'react';

export interface LanTruckMonsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMonster: React.FC<LanTruckMonsterProps>;
export default LanTruckMonster;
