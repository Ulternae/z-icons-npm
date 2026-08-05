import React from 'react';

export interface NeoHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHeart(props: NeoHeartProps): React.ReactElement;
export default NeoHeart;
