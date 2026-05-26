import React from 'react';

export interface LanBoomboxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoomboxThin: React.FC<LanBoomboxThinProps>;
export default LanBoomboxThin;
