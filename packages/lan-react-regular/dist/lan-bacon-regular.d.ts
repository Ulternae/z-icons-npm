import React from 'react';

export interface LanBaconRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaconRegular(props: LanBaconRegularProps): React.ReactElement;
export default LanBaconRegular;
