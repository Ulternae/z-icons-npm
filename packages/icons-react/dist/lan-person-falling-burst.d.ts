import React from 'react';

export interface LanPersonFallingBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFallingBurst: React.FC<LanPersonFallingBurstProps>;
export default LanPersonFallingBurst;
