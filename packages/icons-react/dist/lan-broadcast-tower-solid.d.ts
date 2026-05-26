import React from 'react';

export interface LanBroadcastTowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroadcastTowerSolid: React.FC<LanBroadcastTowerSolidProps>;
export default LanBroadcastTowerSolid;
