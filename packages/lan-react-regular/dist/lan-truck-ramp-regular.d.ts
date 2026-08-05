import React from 'react';

export interface LanTruckRampRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRampRegular(props: LanTruckRampRegularProps): React.ReactElement;
export default LanTruckRampRegular;
