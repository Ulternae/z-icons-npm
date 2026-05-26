import React from 'react';

export interface LanTeethOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeethOpenThin: React.FC<LanTeethOpenThinProps>;
export default LanTeethOpenThin;
