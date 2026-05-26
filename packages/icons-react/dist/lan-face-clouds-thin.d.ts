import React from 'react';

export interface LanFaceCloudsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceCloudsThin: React.FC<LanFaceCloudsThinProps>;
export default LanFaceCloudsThin;
