import React from 'react';

export interface LanKeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyThin: React.FC<LanKeyThinProps>;
export default LanKeyThin;
