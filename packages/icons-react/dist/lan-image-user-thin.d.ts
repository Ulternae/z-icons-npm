import React from 'react';

export interface LanImageUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageUserThin: React.FC<LanImageUserThinProps>;
export default LanImageUserThin;
