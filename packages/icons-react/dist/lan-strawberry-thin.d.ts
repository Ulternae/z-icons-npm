import React from 'react';

export interface LanStrawberryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStrawberryThin: React.FC<LanStrawberryThinProps>;
export default LanStrawberryThin;
