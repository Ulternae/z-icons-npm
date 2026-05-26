import React from 'react';

export interface LanTromboneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTromboneRegular: React.FC<LanTromboneRegularProps>;
export default LanTromboneRegular;
