import React from 'react';

export interface LanSignPostThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPostThin: React.FC<LanSignPostThinProps>;
export default LanSignPostThin;
