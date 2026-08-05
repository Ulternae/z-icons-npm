import React from 'react';

export interface LanBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurst(props: LanBurstProps): React.ReactElement;
export default LanBurst;
