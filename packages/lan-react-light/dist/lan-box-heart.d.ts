import React from 'react';

export interface LanBoxHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxHeart(props: LanBoxHeartProps): React.ReactElement;
export default LanBoxHeart;
