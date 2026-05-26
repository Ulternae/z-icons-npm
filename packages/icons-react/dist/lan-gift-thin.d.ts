import React from 'react';

export interface LanGiftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftThin: React.FC<LanGiftThinProps>;
export default LanGiftThin;
