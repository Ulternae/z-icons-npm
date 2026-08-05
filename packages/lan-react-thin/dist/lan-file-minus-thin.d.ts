import React from 'react';

export interface LanFileMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMinusThin(props: LanFileMinusThinProps): React.ReactElement;
export default LanFileMinusThin;
