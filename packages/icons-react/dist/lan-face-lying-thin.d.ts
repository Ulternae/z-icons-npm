import React from 'react';

export interface LanFaceLyingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLyingThin: React.FC<LanFaceLyingThinProps>;
export default LanFaceLyingThin;
