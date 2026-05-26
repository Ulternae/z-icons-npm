import React from 'react';

export interface LanFaceGrinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinThin: React.FC<LanFaceGrinThinProps>;
export default LanFaceGrinThin;
