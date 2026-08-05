import React from 'react';

export interface LanDoorOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDoorOpenThin(props: LanDoorOpenThinProps): React.ReactElement;
export default LanDoorOpenThin;
