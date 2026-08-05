import React from 'react';

export interface LanHouseTsunamiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTsunamiSolid(props: LanHouseTsunamiSolidProps): React.ReactElement;
export default LanHouseTsunamiSolid;
