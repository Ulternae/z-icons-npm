import React from 'react';

export interface LanBatteryCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatteryCarThin(props: LanBatteryCarThinProps): React.ReactElement;
export default LanBatteryCarThin;
