import React from 'react';

export interface LanInfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfoThin: React.FC<LanInfoThinProps>;
export default LanInfoThin;
