import React from 'react';

export interface LanLampRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampRegular: React.FC<LanLampRegularProps>;
export default LanLampRegular;
