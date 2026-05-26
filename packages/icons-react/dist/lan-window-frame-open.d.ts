import React from 'react';

export interface LanWindowFrameOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowFrameOpen: React.FC<LanWindowFrameOpenProps>;
export default LanWindowFrameOpen;
