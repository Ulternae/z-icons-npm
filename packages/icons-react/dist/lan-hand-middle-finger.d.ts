import React from 'react';

export interface LanHandMiddleFingerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandMiddleFinger: React.FC<LanHandMiddleFingerProps>;
export default LanHandMiddleFinger;
