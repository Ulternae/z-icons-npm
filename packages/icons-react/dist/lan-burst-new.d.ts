import React from 'react';

export interface LanBurstNewProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurstNew: React.FC<LanBurstNewProps>;
export default LanBurstNew;
