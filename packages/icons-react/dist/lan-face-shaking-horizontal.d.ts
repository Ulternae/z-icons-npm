import React from 'react';

export interface LanFaceShakingHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShakingHorizontal: React.FC<LanFaceShakingHorizontalProps>;
export default LanFaceShakingHorizontal;
