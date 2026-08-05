import React from 'react';

export interface LanHouseWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseWindowSolid(props: LanHouseWindowSolidProps): React.ReactElement;
export default LanHouseWindowSolid;
