import React from 'react';

export interface LanStretcherProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStretcher: React.FC<LanStretcherProps>;
export default LanStretcher;
