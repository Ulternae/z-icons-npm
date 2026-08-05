import React from 'react';

export interface LanUserPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPlusThin(props: LanUserPlusThinProps): React.ReactElement;
export default LanUserPlusThin;
