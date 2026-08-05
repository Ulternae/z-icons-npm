import React from 'react';

export interface LanTruckFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFireThin(props: LanTruckFireThinProps): React.ReactElement;
export default LanTruckFireThin;
