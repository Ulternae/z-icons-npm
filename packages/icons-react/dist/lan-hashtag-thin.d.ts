import React from 'react';

export interface LanHashtagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHashtagThin: React.FC<LanHashtagThinProps>;
export default LanHashtagThin;
