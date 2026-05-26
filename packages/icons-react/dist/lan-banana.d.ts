import React from 'react';

export interface LanBananaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanana: React.FC<LanBananaProps>;
export default LanBanana;
