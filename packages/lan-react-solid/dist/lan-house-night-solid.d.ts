import React from 'react';

export interface LanHouseNightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseNightSolid(props: LanHouseNightSolidProps): React.ReactElement;
export default LanHouseNightSolid;
