import React from 'react';

export interface LanTruckContainerEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckContainerEmptySolid(props: LanTruckContainerEmptySolidProps): React.ReactElement;
export default LanTruckContainerEmptySolid;
