import React from 'react';

export interface LanLampThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampThin: React.FC<LanLampThinProps>;
export default LanLampThin;
