import React from 'react';

export interface LanBanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBan: React.FC<LanBanProps>;
export default LanBan;
