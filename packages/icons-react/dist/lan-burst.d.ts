import React from 'react';

export interface LanBurstProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurst: React.FC<LanBurstProps>;
export default LanBurst;
