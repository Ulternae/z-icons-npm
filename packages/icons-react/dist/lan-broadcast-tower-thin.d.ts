import React from 'react';

export interface LanBroadcastTowerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroadcastTowerThin: React.FC<LanBroadcastTowerThinProps>;
export default LanBroadcastTowerThin;
