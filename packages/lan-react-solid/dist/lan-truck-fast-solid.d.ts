import React from 'react';

export interface LanTruckFastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFastSolid(props: LanTruckFastSolidProps): React.ReactElement;
export default LanTruckFastSolid;
