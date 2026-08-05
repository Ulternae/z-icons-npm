import React from 'react';

export interface LanBatteryExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatteryExclamation(props: LanBatteryExclamationProps): React.ReactElement;
export default LanBatteryExclamation;
