import React from 'react';

export interface LanTruckFrontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFrontSolid(props: LanTruckFrontSolidProps): React.ReactElement;
export default LanTruckFrontSolid;
