import React from 'react';

export interface LanPersonFallingBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFallingBurst(props: LanPersonFallingBurstProps): React.ReactElement;
export default LanPersonFallingBurst;
