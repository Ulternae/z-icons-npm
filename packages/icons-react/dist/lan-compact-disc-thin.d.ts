import React from 'react';

export interface LanCompactDiscThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompactDiscThin: React.FC<LanCompactDiscThinProps>;
export default LanCompactDiscThin;
