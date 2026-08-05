import React from 'react';

export interface LanTruckDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckDropletRegular(props: LanTruckDropletRegularProps): React.ReactElement;
export default LanTruckDropletRegular;
