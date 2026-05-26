import React from 'react';

export interface LanStrawberryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStrawberry: React.FC<LanStrawberryProps>;
export default LanStrawberry;
