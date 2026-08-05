import React from 'react';

export interface LanBusAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusAltThin(props: LanBusAltThinProps): React.ReactElement;
export default LanBusAltThin;
