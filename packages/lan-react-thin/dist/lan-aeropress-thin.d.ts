import React from 'react';

export interface LanAeropressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAeropressThin(props: LanAeropressThinProps): React.ReactElement;
export default LanAeropressThin;
