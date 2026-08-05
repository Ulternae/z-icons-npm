import React from 'react';

export interface LanTruckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckRegular(props: LanTruckRegularProps): React.ReactElement;
export default LanTruckRegular;
