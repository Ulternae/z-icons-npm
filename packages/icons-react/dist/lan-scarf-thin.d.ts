import React from 'react';

export interface LanScarfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScarfThin: React.FC<LanScarfThinProps>;
export default LanScarfThin;
