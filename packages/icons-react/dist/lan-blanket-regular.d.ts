import React from 'react';

export interface LanBlanketRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlanketRegular: React.FC<LanBlanketRegularProps>;
export default LanBlanketRegular;
