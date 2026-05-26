import React from 'react';

export interface LanTentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentRegular: React.FC<LanTentRegularProps>;
export default LanTentRegular;
