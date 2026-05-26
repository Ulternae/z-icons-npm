import React from 'react';

export interface LanTruckMonsterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckMonsterRegular: React.FC<LanTruckMonsterRegularProps>;
export default LanTruckMonsterRegular;
