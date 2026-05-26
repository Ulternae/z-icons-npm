import React from 'react';

export interface LanMessageHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageHeart: React.FC<LanMessageHeartProps>;
export default LanMessageHeart;
