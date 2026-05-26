import React from 'react';

export interface LanFaceWorriedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWorriedThin: React.FC<LanFaceWorriedThinProps>;
export default LanFaceWorriedThin;
