import React from 'react';

export interface LanPersonBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBurst: React.FC<LanPersonBurstProps>;
export default LanPersonBurst;
