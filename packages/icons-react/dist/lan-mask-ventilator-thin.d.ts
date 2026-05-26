import React from 'react';

export interface LanMaskVentilatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskVentilatorThin: React.FC<LanMaskVentilatorThinProps>;
export default LanMaskVentilatorThin;
