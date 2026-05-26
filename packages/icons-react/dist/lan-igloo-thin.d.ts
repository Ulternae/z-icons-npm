import React from 'react';

export interface LanIglooThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIglooThin: React.FC<LanIglooThinProps>;
export default LanIglooThin;
