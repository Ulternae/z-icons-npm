import React from 'react';

export interface LanMoundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoundThin: React.FC<LanMoundThinProps>;
export default LanMoundThin;
