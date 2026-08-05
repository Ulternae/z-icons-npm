import React from 'react';

export interface LanFileTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileTimesThin(props: LanFileTimesThinProps): React.ReactElement;
export default LanFileTimesThin;
