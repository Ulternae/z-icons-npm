import React from 'react';

export interface LanTruckBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckBoltThin(props: LanTruckBoltThinProps): React.ReactElement;
export default LanTruckBoltThin;
