import React from 'react';

export interface LanTruckRampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRamp(props: LanTruckRampProps): React.ReactElement;
export default LanTruckRamp;
