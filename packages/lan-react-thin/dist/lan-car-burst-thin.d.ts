import React from 'react';

export interface LanCarBurstThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBurstThin(props: LanCarBurstThinProps): React.ReactElement;
export default LanCarBurstThin;
