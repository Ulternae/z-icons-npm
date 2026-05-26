import React from 'react';

export interface LanLampDeskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampDeskRegular: React.FC<LanLampDeskRegularProps>;
export default LanLampDeskRegular;
