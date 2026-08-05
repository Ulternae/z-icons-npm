import React from 'react';

export interface LanBusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusThin(props: LanBusThinProps): React.ReactElement;
export default LanBusThin;
