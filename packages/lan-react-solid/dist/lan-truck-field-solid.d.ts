import React from 'react';

export interface LanTruckFieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFieldSolid(props: LanTruckFieldSolidProps): React.ReactElement;
export default LanTruckFieldSolid;
