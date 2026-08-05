import React from 'react';

export interface LanHandHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHeart(props: LanHandHeartProps): React.ReactElement;
export default LanHandHeart;
