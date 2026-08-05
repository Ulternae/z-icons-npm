import React from 'react';

export interface LanDrumSteelpanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumSteelpanSolid(props: LanDrumSteelpanSolidProps): React.ReactElement;
export default LanDrumSteelpanSolid;
