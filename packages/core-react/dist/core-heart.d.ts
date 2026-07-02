import React from 'react';

export interface CoreHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHeart(props: CoreHeartProps): React.ReactElement;
export default CoreHeart;
