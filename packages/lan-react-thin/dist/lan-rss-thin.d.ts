import React from 'react';

export interface LanRssThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRssThin(props: LanRssThinProps): React.ReactElement;
export default LanRssThin;
