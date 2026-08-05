import React from 'react';

export interface LanFilesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilesThin(props: LanFilesThinProps): React.ReactElement;
export default LanFilesThin;
