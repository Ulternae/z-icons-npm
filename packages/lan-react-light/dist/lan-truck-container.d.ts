import React from 'react';

export interface LanTruckContainerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckContainer(props: LanTruckContainerProps): React.ReactElement;
export default LanTruckContainer;
