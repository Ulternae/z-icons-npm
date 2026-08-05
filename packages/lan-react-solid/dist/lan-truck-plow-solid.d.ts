import React from 'react';

export interface LanTruckPlowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckPlowSolid(props: LanTruckPlowSolidProps): React.ReactElement;
export default LanTruckPlowSolid;
