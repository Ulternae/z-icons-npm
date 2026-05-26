import React from 'react';

export interface LanFaceConfoundedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceConfoundedThin: React.FC<LanFaceConfoundedThinProps>;
export default LanFaceConfoundedThin;
