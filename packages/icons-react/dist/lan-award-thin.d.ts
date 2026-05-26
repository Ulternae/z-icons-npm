import React from 'react';

export interface LanAwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAwardThin: React.FC<LanAwardThinProps>;
export default LanAwardThin;
