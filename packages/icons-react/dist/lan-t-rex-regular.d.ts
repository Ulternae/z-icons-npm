import React from 'react';

export interface LanTRexRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTRexRegular: React.FC<LanTRexRegularProps>;
export default LanTRexRegular;
