import React from 'react';

export interface LanBaconThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaconThin(props: LanBaconThinProps): React.ReactElement;
export default LanBaconThin;
