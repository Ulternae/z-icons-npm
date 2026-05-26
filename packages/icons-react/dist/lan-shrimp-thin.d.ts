import React from 'react';

export interface LanShrimpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShrimpThin: React.FC<LanShrimpThinProps>;
export default LanShrimpThin;
