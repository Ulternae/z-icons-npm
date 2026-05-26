import React from 'react';

export interface LanPersonRunningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRunningThin: React.FC<LanPersonRunningThinProps>;
export default LanPersonRunningThin;
