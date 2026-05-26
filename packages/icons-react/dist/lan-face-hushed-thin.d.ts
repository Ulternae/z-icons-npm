import React from 'react';

export interface LanFaceHushedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHushedThin: React.FC<LanFaceHushedThinProps>;
export default LanFaceHushedThin;
