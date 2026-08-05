import React from 'react';

export interface LanBookHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookHeart(props: LanBookHeartProps): React.ReactElement;
export default LanBookHeart;
