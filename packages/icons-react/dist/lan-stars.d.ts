import React from 'react';

export interface LanStarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStars: React.FC<LanStarsProps>;
export default LanStars;
