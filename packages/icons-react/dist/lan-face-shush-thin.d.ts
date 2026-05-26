import React from 'react';

export interface LanFaceShushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceShushThin: React.FC<LanFaceShushThinProps>;
export default LanFaceShushThin;
