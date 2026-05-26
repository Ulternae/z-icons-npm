import React from 'react';

export interface LanTentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentThin: React.FC<LanTentThinProps>;
export default LanTentThin;
