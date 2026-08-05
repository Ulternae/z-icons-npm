import React from 'react';

export interface LanTruckContainerEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckContainerEmpty(props: LanTruckContainerEmptyProps): React.ReactElement;
export default LanTruckContainerEmpty;
