import React from 'react';

export interface LanTruckContainerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckContainerRegular(props: LanTruckContainerRegularProps): React.ReactElement;
export default LanTruckContainerRegular;
