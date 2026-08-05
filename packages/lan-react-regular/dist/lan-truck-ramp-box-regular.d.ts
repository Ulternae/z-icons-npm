import React from 'react';

export interface LanTruckRampBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRampBoxRegular(props: LanTruckRampBoxRegularProps): React.ReactElement;
export default LanTruckRampBoxRegular;
