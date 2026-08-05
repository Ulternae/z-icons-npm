import React from 'react';

export interface LanPawClawsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPawClawsThin(props: LanPawClawsThinProps): React.ReactElement;
export default LanPawClawsThin;
