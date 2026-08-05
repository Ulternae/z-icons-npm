import React from 'react';

export interface LanDrumstickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumstickSolid(props: LanDrumstickSolidProps): React.ReactElement;
export default LanDrumstickSolid;
