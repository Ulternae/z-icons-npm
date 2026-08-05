import React from 'react';

export interface LanBellPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellPlusThin(props: LanBellPlusThinProps): React.ReactElement;
export default LanBellPlusThin;
