import React from 'react';

export interface LanTruckMonsterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMonsterRegular(props: LanTruckMonsterRegularProps): React.ReactElement;
export default LanTruckMonsterRegular;
