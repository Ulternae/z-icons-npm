import React from 'react';

export interface LanDressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDressThin(props: LanDressThinProps): React.ReactElement;
export default LanDressThin;
