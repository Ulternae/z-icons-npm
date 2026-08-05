import React from 'react';

export interface LanStarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarsThin(props: LanStarsThinProps): React.ReactElement;
export default LanStarsThin;
