import React from 'react';

export interface LanHandMiddleFingerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandMiddleFingerThin: React.FC<LanHandMiddleFingerThinProps>;
export default LanHandMiddleFingerThin;
