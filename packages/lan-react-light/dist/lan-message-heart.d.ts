import React from 'react';

export interface LanMessageHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageHeart(props: LanMessageHeartProps): React.ReactElement;
export default LanMessageHeart;
