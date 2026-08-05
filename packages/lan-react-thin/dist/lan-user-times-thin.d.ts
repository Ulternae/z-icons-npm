import React from 'react';

export interface LanUserTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTimesThin(props: LanUserTimesThinProps): React.ReactElement;
export default LanUserTimesThin;
