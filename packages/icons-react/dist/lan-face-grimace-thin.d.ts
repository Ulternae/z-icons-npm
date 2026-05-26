import React from 'react';

export interface LanFaceGrimaceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrimaceThin: React.FC<LanFaceGrimaceThinProps>;
export default LanFaceGrimaceThin;
