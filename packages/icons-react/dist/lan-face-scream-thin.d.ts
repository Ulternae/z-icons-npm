import React from 'react';

export interface LanFaceScreamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceScreamThin: React.FC<LanFaceScreamThinProps>;
export default LanFaceScreamThin;
