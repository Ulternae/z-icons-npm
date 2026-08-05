import React from 'react';

export interface LanPersonBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBurst(props: LanPersonBurstProps): React.ReactElement;
export default LanPersonBurst;
