import React from 'react';

export interface LanHandFingersCrossedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandFingersCrossed: React.FC<LanHandFingersCrossedProps>;
export default LanHandFingersCrossed;
