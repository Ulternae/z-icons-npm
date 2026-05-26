import React from 'react';

export interface LanFaceShakingVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShakingVertical: React.FC<LanFaceShakingVerticalProps>;
export default LanFaceShakingVertical;
