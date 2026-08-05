import React from 'react';

export interface LanHouseLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseLockSolid(props: LanHouseLockSolidProps): React.ReactElement;
export default LanHouseLockSolid;
