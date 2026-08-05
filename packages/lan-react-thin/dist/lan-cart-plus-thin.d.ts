import React from 'react';

export interface LanCartPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartPlusThin(props: LanCartPlusThinProps): React.ReactElement;
export default LanCartPlusThin;
