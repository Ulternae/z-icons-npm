import React from 'react';

export interface LanHomeHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeHeart(props: LanHomeHeartProps): React.ReactElement;
export default LanHomeHeart;
