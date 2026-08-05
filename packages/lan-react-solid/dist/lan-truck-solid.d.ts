import React from 'react';

export interface LanTruckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckSolid(props: LanTruckSolidProps): React.ReactElement;
export default LanTruckSolid;
