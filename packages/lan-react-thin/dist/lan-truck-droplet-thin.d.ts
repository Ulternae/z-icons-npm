import React from 'react';

export interface LanTruckDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckDropletThin(props: LanTruckDropletThinProps): React.ReactElement;
export default LanTruckDropletThin;
