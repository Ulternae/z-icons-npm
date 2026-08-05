import React from 'react';

export interface LanBatteryCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatteryCarSolid(props: LanBatteryCarSolidProps): React.ReactElement;
export default LanBatteryCarSolid;
