import React from 'react';

export interface LanTrailerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrailerThin: React.FC<LanTrailerThinProps>;
export default LanTrailerThin;
