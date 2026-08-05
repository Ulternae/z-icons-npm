import React from 'react';

export interface LanSeatsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatsThin(props: LanSeatsThinProps): React.ReactElement;
export default LanSeatsThin;
