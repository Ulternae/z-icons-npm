import React from 'react';

export interface LanTeethThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeethThin: React.FC<LanTeethThinProps>;
export default LanTeethThin;
