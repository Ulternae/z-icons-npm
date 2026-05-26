import React from 'react';

export interface LanMaskVentilatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskVentilator: React.FC<LanMaskVentilatorProps>;
export default LanMaskVentilator;
