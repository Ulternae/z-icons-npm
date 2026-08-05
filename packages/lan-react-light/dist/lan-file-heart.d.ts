import React from 'react';

export interface LanFileHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHeart(props: LanFileHeartProps): React.ReactElement;
export default LanFileHeart;
