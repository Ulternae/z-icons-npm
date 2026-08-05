import React from 'react';

export interface MinaHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeart(props: MinaHeartProps): React.ReactElement;
export default MinaHeart;
