import React from 'react';

export interface LanHandFistThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandFistThin: React.FC<LanHandFistThinProps>;
export default LanHandFistThin;
