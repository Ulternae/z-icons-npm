import React from 'react';

export interface LanTruckMonsterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMonsterThin: React.FC<LanTruckMonsterThinProps>;
export default LanTruckMonsterThin;
