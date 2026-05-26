import React from 'react';

export interface LanHockeySticksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeySticksRegular: React.FC<LanHockeySticksRegularProps>;
export default LanHockeySticksRegular;
