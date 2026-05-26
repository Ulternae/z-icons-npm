import React from 'react';

export interface LanMemoPadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoPadThin: React.FC<LanMemoPadThinProps>;
export default LanMemoPadThin;
