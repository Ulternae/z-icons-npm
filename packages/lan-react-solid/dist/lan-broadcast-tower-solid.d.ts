import React from 'react';

export interface LanBroadcastTowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroadcastTowerSolid(props: LanBroadcastTowerSolidProps): React.ReactElement;
export default LanBroadcastTowerSolid;
