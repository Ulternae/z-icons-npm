import React from 'react';

export interface LanPersonBurstThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBurstThin(props: LanPersonBurstThinProps): React.ReactElement;
export default LanPersonBurstThin;
