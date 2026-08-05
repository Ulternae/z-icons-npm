import React from 'react';

export interface LanStairsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStairs(props: LanStairsProps): React.ReactElement;
export default LanStairs;
