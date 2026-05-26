import React from 'react';

export interface LanPersonDressBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDressBurst: React.FC<LanPersonDressBurstProps>;
export default LanPersonDressBurst;
