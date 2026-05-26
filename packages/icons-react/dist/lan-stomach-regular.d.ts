import React from 'react';

export interface LanStomachRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStomachRegular: React.FC<LanStomachRegularProps>;
export default LanStomachRegular;
