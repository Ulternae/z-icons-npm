import React from 'react';

export interface LanFileAwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAwardThin: React.FC<LanFileAwardThinProps>;
export default LanFileAwardThin;
