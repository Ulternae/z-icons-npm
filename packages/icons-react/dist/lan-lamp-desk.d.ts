import React from 'react';

export interface LanLampDeskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampDesk: React.FC<LanLampDeskProps>;
export default LanLampDesk;
