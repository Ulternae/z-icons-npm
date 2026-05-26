import React from 'react';

export interface LanEyeEvilThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeEvilThin: React.FC<LanEyeEvilThinProps>;
export default LanEyeEvilThin;
