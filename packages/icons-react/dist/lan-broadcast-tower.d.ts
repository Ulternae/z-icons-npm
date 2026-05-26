import React from 'react';

export interface LanBroadcastTowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroadcastTower: React.FC<LanBroadcastTowerProps>;
export default LanBroadcastTower;
