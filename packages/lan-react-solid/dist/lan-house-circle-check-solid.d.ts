import React from 'react';

export interface LanHouseCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseCircleCheckSolid(props: LanHouseCircleCheckSolidProps): React.ReactElement;
export default LanHouseCircleCheckSolid;
