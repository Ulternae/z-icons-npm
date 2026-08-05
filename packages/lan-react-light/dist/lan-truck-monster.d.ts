import React from 'react';

export interface LanTruckMonsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMonster(props: LanTruckMonsterProps): React.ReactElement;
export default LanTruckMonster;
