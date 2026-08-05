import React from 'react';

export interface LanDrumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumSolid(props: LanDrumSolidProps): React.ReactElement;
export default LanDrumSolid;
