import React from 'react';

export interface LanVestSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVestSolid(props: LanVestSolidProps): React.ReactElement;
export default LanVestSolid;
