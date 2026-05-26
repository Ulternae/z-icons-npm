import React from 'react';

export interface LanSdCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSdCardThin: React.FC<LanSdCardThinProps>;
export default LanSdCardThin;
