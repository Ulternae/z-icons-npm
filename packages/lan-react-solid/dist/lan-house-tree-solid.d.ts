import React from 'react';

export interface LanHouseTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTreeSolid(props: LanHouseTreeSolidProps): React.ReactElement;
export default LanHouseTreeSolid;
