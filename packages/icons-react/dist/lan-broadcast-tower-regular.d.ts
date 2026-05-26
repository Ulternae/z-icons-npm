import React from 'react';

export interface LanBroadcastTowerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroadcastTowerRegular: React.FC<LanBroadcastTowerRegularProps>;
export default LanBroadcastTowerRegular;
