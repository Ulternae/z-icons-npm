import React from 'react';

export interface LanFaceSmileHeartsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileHeartsThin: React.FC<LanFaceSmileHeartsThinProps>;
export default LanFaceSmileHeartsThin;
