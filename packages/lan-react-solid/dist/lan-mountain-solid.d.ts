import React from 'react';

export interface LanMountainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainSolid(props: LanMountainSolidProps): React.ReactElement;
export default LanMountainSolid;
