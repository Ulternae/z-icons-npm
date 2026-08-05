import React from 'react';

export interface LanHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeart(props: LanHeartProps): React.ReactElement;
export default LanHeart;
