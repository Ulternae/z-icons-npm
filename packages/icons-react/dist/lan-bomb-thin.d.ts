import React from 'react';

export interface LanBombThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBombThin: React.FC<LanBombThinProps>;
export default LanBombThin;
