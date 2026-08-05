import React from 'react';

export interface LanTruckContainerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckContainerSolid(props: LanTruckContainerSolidProps): React.ReactElement;
export default LanTruckContainerSolid;
