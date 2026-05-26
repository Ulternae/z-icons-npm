import React from 'react';

export interface LanPersonRunningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonRunning: React.FC<LanPersonRunningProps>;
export default LanPersonRunning;
