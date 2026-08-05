import React from 'react';

export interface LanTruckClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckClockSolid(props: LanTruckClockSolidProps): React.ReactElement;
export default LanTruckClockSolid;
