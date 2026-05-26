import React from 'react';

export interface LanMaskVentilatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskVentilatorRegular: React.FC<LanMaskVentilatorRegularProps>;
export default LanMaskVentilatorRegular;
