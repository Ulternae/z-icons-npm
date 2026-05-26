import React from 'react';

export interface LanBarnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarnThin: React.FC<LanBarnThinProps>;
export default LanBarnThin;
