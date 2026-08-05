import React from 'react';

export interface LanTruckFieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFieldRegular(props: LanTruckFieldRegularProps): React.ReactElement;
export default LanTruckFieldRegular;
