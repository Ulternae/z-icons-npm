import React from 'react';

export interface LanBanjoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanjo: React.FC<LanBanjoProps>;
export default LanBanjo;
