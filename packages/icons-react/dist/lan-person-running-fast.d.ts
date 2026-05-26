import React from 'react';

export interface LanPersonRunningFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRunningFast: React.FC<LanPersonRunningFastProps>;
export default LanPersonRunningFast;
