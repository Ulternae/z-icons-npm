import React from 'react';

export interface LanTruckFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFireSolid(props: LanTruckFireSolidProps): React.ReactElement;
export default LanTruckFireSolid;
