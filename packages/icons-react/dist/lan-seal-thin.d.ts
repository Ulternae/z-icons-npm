import React from 'react';

export interface LanSealThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSealThin: React.FC<LanSealThinProps>;
export default LanSealThin;
