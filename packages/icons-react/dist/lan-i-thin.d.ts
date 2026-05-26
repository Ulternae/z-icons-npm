import React from 'react';

export interface LanIThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIThin: React.FC<LanIThinProps>;
export default LanIThin;
