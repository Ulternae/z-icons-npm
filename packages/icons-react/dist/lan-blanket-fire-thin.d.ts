import React from 'react';

export interface LanBlanketFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlanketFireThin: React.FC<LanBlanketFireThinProps>;
export default LanBlanketFireThin;
