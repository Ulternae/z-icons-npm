import React from 'react';

export interface LanWindowFrameOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowFrameOpenThin: React.FC<LanWindowFrameOpenThinProps>;
export default LanWindowFrameOpenThin;
