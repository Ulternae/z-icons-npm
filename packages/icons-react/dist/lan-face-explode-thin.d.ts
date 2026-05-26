import React from 'react';

export interface LanFaceExplodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExplodeThin: React.FC<LanFaceExplodeThinProps>;
export default LanFaceExplodeThin;
