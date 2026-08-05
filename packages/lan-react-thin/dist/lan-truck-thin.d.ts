import React from 'react';

export interface LanTruckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckThin(props: LanTruckThinProps): React.ReactElement;
export default LanTruckThin;
