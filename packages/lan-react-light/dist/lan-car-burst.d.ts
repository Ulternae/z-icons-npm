import React from 'react';

export interface LanCarBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBurst(props: LanCarBurstProps): React.ReactElement;
export default LanCarBurst;
