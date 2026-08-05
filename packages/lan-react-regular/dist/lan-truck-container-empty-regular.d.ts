import React from 'react';

export interface LanTruckContainerEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckContainerEmptyRegular(props: LanTruckContainerEmptyRegularProps): React.ReactElement;
export default LanTruckContainerEmptyRegular;
