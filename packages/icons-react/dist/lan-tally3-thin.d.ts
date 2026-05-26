import React from 'react';

export interface LanTally3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally3Thin: React.FC<LanTally3ThinProps>;
export default LanTally3Thin;
