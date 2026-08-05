import React from 'react';

export interface LanCompressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompressThin(props: LanCompressThinProps): React.ReactElement;
export default LanCompressThin;
