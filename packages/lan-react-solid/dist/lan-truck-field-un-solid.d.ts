import React from 'react';

export interface LanTruckFieldUnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFieldUnSolid(props: LanTruckFieldUnSolidProps): React.ReactElement;
export default LanTruckFieldUnSolid;
