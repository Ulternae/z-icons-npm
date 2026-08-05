import React from 'react';

export interface LanBaconProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBacon(props: LanBaconProps): React.ReactElement;
export default LanBacon;
