import React from 'react';

export interface LanTruckSuvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckSuvSolid(props: LanTruckSuvSolidProps): React.ReactElement;
export default LanTruckSuvSolid;
