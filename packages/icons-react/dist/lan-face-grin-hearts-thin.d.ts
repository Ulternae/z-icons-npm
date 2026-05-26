import React from 'react';

export interface LanFaceGrinHeartsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinHeartsThin: React.FC<LanFaceGrinHeartsThinProps>;
export default LanFaceGrinHeartsThin;
