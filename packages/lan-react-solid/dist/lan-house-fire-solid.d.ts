import React from 'react';

export interface LanHouseFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFireSolid(props: LanHouseFireSolidProps): React.ReactElement;
export default LanHouseFireSolid;
