import React from 'react';

export interface LanTacoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTacoRegular: React.FC<LanTacoRegularProps>;
export default LanTacoRegular;
