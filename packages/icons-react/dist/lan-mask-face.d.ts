import React from 'react';

export interface LanMaskFaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskFace: React.FC<LanMaskFaceProps>;
export default LanMaskFace;
