import React from 'react';

export interface LanStarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarsRegular: React.FC<LanStarsRegularProps>;
export default LanStarsRegular;
