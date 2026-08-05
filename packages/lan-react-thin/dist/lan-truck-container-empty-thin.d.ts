import React from 'react';

export interface LanTruckContainerEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckContainerEmptyThin(props: LanTruckContainerEmptyThinProps): React.ReactElement;
export default LanTruckContainerEmptyThin;
