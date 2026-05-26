import React from 'react';

export interface LanDeskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesk: React.FC<LanDeskProps>;
export default LanDesk;
