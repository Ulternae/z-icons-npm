import React from 'react';

export interface LanBatteryCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatteryCarRegular(props: LanBatteryCarRegularProps): React.ReactElement;
export default LanBatteryCarRegular;
