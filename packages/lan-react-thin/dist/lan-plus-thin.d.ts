import React from 'react';

export interface LanPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusThin(props: LanPlusThinProps): React.ReactElement;
export default LanPlusThin;
