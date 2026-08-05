import React from 'react';

export interface LanBlindsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlinds(props: LanBlindsProps): React.ReactElement;
export default LanBlinds;
