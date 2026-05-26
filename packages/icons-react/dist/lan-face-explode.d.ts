import React from 'react';

export interface LanFaceExplodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExplode: React.FC<LanFaceExplodeProps>;
export default LanFaceExplode;
