import React from 'react';

export interface LanTruckFlatbedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFlatbedSolid(props: LanTruckFlatbedSolidProps): React.ReactElement;
export default LanTruckFlatbedSolid;
