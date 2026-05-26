import React from 'react';

export interface LanFaceShakingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShakingThin: React.FC<LanFaceShakingThinProps>;
export default LanFaceShakingThin;
