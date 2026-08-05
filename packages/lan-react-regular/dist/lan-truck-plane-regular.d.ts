import React from 'react';

export interface LanTruckPlaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPlaneRegular(props: LanTruckPlaneRegularProps): React.ReactElement;
export default LanTruckPlaneRegular;
