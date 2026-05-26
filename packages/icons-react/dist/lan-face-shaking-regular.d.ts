import React from 'react';

export interface LanFaceShakingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShakingRegular: React.FC<LanFaceShakingRegularProps>;
export default LanFaceShakingRegular;
