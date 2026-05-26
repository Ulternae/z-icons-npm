import React from 'react';

export interface LanSaltShakerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaltShakerThin: React.FC<LanSaltShakerThinProps>;
export default LanSaltShakerThin;
