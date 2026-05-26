import React from 'react';

export interface LanLampDeskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampDeskThin: React.FC<LanLampDeskThinProps>;
export default LanLampDeskThin;
