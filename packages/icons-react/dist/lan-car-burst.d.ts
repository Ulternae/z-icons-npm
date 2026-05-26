import React from 'react';

export interface LanCarBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBurst: React.FC<LanCarBurstProps>;
export default LanCarBurst;
