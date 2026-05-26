import React from 'react';

export interface LanColonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanColonThin: React.FC<LanColonThinProps>;
export default LanColonThin;
