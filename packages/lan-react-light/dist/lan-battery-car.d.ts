import React from 'react';

export interface LanBatteryCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatteryCar(props: LanBatteryCarProps): React.ReactElement;
export default LanBatteryCar;
