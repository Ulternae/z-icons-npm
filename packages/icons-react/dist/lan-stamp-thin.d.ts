import React from 'react';

export interface LanStampThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStampThin: React.FC<LanStampThinProps>;
export default LanStampThin;
