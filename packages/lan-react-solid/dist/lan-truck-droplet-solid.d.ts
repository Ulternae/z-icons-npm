import React from 'react';

export interface LanTruckDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckDropletSolid(props: LanTruckDropletSolidProps): React.ReactElement;
export default LanTruckDropletSolid;
