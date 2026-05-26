import React from 'react';

export interface LanBookOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenThin: React.FC<LanBookOpenThinProps>;
export default LanBookOpenThin;
