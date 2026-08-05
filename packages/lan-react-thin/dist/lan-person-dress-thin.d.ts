import React from 'react';

export interface LanPersonDressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDressThin(props: LanPersonDressThinProps): React.ReactElement;
export default LanPersonDressThin;
