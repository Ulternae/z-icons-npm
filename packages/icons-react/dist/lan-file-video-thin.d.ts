import React from 'react';

export interface LanFileVideoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileVideoThin: React.FC<LanFileVideoThinProps>;
export default LanFileVideoThin;
