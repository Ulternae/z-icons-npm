import React from 'react';

export interface LanTruckTowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckTowSolid(props: LanTruckTowSolidProps): React.ReactElement;
export default LanTruckTowSolid;
