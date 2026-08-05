import React from 'react';

export interface LanTruckContainerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckContainerThin(props: LanTruckContainerThinProps): React.ReactElement;
export default LanTruckContainerThin;
