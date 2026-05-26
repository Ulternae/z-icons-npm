import React from 'react';

export interface LanUThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUThin: React.FC<LanUThinProps>;
export default LanUThin;
