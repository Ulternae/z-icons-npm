import React from 'react';

export interface LanFaceAnguishedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceAnguishedThin: React.FC<LanFaceAnguishedThinProps>;
export default LanFaceAnguishedThin;
