import React from 'react';

export interface LanFaceShakingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShaking: React.FC<LanFaceShakingProps>;
export default LanFaceShaking;
