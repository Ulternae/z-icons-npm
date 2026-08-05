import React from 'react';

export interface LanVideoPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoPlusThin(props: LanVideoPlusThinProps): React.ReactElement;
export default LanVideoPlusThin;
