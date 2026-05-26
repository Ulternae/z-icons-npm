import React from 'react';

export interface LanStretcherThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStretcherThin: React.FC<LanStretcherThinProps>;
export default LanStretcherThin;
