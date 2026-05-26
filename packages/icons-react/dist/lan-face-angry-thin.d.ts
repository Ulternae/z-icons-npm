import React from 'react';

export interface LanFaceAngryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceAngryThin: React.FC<LanFaceAngryThinProps>;
export default LanFaceAngryThin;
