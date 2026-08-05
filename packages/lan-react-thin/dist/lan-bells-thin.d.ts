import React from 'react';

export interface LanBellsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellsThin(props: LanBellsThinProps): React.ReactElement;
export default LanBellsThin;
