import React from 'react';

export interface LanJeansThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJeansThin(props: LanJeansThinProps): React.ReactElement;
export default LanJeansThin;
