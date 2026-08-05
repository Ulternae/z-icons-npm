import React from 'react';

export interface LanBatteryBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatteryBoltRegular(props: LanBatteryBoltRegularProps): React.ReactElement;
export default LanBatteryBoltRegular;
