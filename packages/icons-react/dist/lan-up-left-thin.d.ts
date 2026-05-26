import React from 'react';

export interface LanUpLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpLeftThin: React.FC<LanUpLeftThinProps>;
export default LanUpLeftThin;
