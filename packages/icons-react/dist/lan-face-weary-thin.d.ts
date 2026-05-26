import React from 'react';

export interface LanFaceWearyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWearyThin: React.FC<LanFaceWearyThinProps>;
export default LanFaceWearyThin;
