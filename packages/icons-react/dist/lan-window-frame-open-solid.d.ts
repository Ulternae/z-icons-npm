import React from 'react';

export interface LanWindowFrameOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowFrameOpenSolid: React.FC<LanWindowFrameOpenSolidProps>;
export default LanWindowFrameOpenSolid;
