import React from 'react';

export interface LanTruckMonsterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMonsterThin(props: LanTruckMonsterThinProps): React.ReactElement;
export default LanTruckMonsterThin;
