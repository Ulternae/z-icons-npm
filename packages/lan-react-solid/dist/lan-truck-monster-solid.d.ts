import React from 'react';

export interface LanTruckMonsterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMonsterSolid(props: LanTruckMonsterSolidProps): React.ReactElement;
export default LanTruckMonsterSolid;
