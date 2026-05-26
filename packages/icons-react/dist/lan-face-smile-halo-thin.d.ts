import React from 'react';

export interface LanFaceSmileHaloThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileHaloThin: React.FC<LanFaceSmileHaloThinProps>;
export default LanFaceSmileHaloThin;
