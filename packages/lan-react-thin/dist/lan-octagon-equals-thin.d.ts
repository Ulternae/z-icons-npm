import React from 'react';

export interface LanOctagonEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonEqualsThin(props: LanOctagonEqualsThinProps): React.ReactElement;
export default LanOctagonEqualsThin;
