import React from 'react';

export interface LanBroadcastTowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroadcastTower(props: LanBroadcastTowerProps): React.ReactElement;
export default LanBroadcastTower;
